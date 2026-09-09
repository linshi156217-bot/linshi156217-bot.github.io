"use client";

import { useEffect, useRef } from "react";

const vertexShader = `
attribute vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

const fragmentShader = `
precision highp float;

uniform vec2 u_resolution;
uniform vec2 u_pointer;
uniform float u_time;
uniform float u_scroll;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x),
    f.y
  );
}

float fbm(vec2 p) {
  float value = 0.0;
  float amplitude = 0.5;
  mat2 rotation = mat2(0.82, -0.57, 0.57, 0.82);
  for (int i = 0; i < 5; i++) {
    value += amplitude * noise(p);
    p = rotation * p * 2.03 + 11.7;
    amplitude *= 0.5;
  }
  return value;
}

void main() {
  vec2 resolution = max(u_resolution, vec2(1.0));
  vec2 uv = (gl_FragCoord.xy - 0.5 * resolution.xy) / min(resolution.x, resolution.y);
  vec2 pointer = (u_pointer - 0.5) * vec2(resolution.x / resolution.y, 1.0);
  float t = u_time * 0.16;

  float n1 = fbm(uv * 1.72 + vec2(t * 0.48, -t * 0.31));
  float n2 = fbm(uv * 3.15 + vec2(-t * 0.28, t * 0.52) + n1);
  vec2 warped = uv + vec2(n1 - 0.5, n2 - 0.5) * 0.31;

  float ribbonA = exp(-abs(warped.y - 0.24 * sin(warped.x * 2.7 + t * 2.1 + n2 * 2.2)) * 8.4);
  float ribbonB = exp(-abs(warped.y + 0.22 * cos(warped.x * 2.15 - t * 1.35 + n1 * 3.0)) * 10.2);
  float horizon = exp(-abs(warped.y + 0.08 + n2 * 0.18) * 13.0);
  float mouseGlow = exp(-length(uv - pointer * 0.72) * 3.2);
  float grain = hash(gl_FragCoord.xy + floor(u_time * 10.0)) - 0.5;

  vec3 midnight = vec3(0.015, 0.022, 0.050);
  vec3 cobalt = vec3(0.055, 0.22, 1.0);
  vec3 electric = vec3(0.08, 0.72, 1.0);
  vec3 acid = vec3(0.56, 1.0, 0.13);
  vec3 silver = vec3(0.82, 0.88, 1.0);

  vec3 color = midnight;
  color += cobalt * ribbonA * (0.42 + n1 * 0.7);
  color += electric * ribbonB * 0.48;
  color += silver * horizon * 0.22;
  color += acid * mouseGlow * ribbonA * 0.16;
  color += cobalt * mouseGlow * 0.12;
  color *= 0.82 + 0.18 * cos(length(uv) * 2.2);
  color *= 1.0 - smoothstep(0.38, 1.25, length(uv)) * 0.72;
  color *= 1.0 - u_scroll * 0.25;
  color += grain * 0.018;

  gl_FragColor = vec4(color, 1.0);
}
`;

function compileShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

export default function MotionField({ className }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const gl = canvas.getContext("webgl", {
      alpha: false,
      antialias: false,
      depth: false,
      powerPreference: "high-performance",
    });
    if (!gl) return undefined;

    const vertex = compileShader(gl, gl.VERTEX_SHADER, vertexShader);
    const fragment = compileShader(gl, gl.FRAGMENT_SHADER, fragmentShader);
    if (!vertex || !fragment) return undefined;

    const program = gl.createProgram();
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return undefined;

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW,
    );

    gl.useProgram(program);
    const position = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    const resolutionLocation = gl.getUniformLocation(program, "u_resolution");
    const pointerLocation = gl.getUniformLocation(program, "u_pointer");
    const timeLocation = gl.getUniformLocation(program, "u_time");
    const scrollLocation = gl.getUniformLocation(program, "u_scroll");

    const pointer = { x: 0.68, y: 0.43, targetX: 0.68, targetY: 0.43 };
    let raf = 0;
    let start = performance.now();

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 1.35);
      const width = Math.max(1, Math.round(rect.width * ratio));
      const height = Math.max(1, Math.round(rect.height * ratio));
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
      gl.viewport(0, 0, width, height);
    };

    const onPointerMove = (event) => {
      pointer.targetX = event.clientX / Math.max(window.innerWidth, 1);
      pointer.targetY = 1 - event.clientY / Math.max(window.innerHeight, 1);
    };

    const render = (now) => {
      resize();
      pointer.x += (pointer.targetX - pointer.x) * 0.055;
      pointer.y += (pointer.targetY - pointer.y) * 0.055;
      const heroScroll = Math.min(window.scrollY / Math.max(window.innerHeight, 1), 1);

      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
      gl.uniform2f(pointerLocation, pointer.x, pointer.y);
      gl.uniform1f(timeLocation, reduced ? 0 : (now - start) / 1000);
      gl.uniform1f(scrollLocation, heroScroll);
      gl.drawArrays(gl.TRIANGLES, 0, 6);

      if (!reduced && !document.hidden) raf = window.requestAnimationFrame(render);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    if (reduced) render(start);
    else raf = window.requestAnimationFrame(render);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      if (raf) window.cancelAnimationFrame(raf);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vertex);
      gl.deleteShader(fragment);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
