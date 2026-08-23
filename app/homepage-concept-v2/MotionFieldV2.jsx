"use client";

import { useEffect, useRef } from "react";

const vertexShader = `
attribute vec2 a_position;
void main(){ gl_Position = vec4(a_position, 0.0, 1.0); }
`;

const fragmentShader = `
precision highp float;
uniform vec2 u_resolution;
uniform vec2 u_pointer;
uniform float u_time;
uniform float u_scroll;

float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453123); }
float noise(vec2 p){
  vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
  return mix(mix(hash(i),hash(i+vec2(1.,0.)),f.x),mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),f.x),f.y);
}
float fbm(vec2 p){
  float v=0., a=.52; mat2 r=mat2(.78,-.63,.63,.78);
  for(int i=0;i<6;i++){ v+=a*noise(p); p=r*p*2.08+8.4; a*=.5; }
  return v;
}

void main(){
  vec2 res=max(u_resolution,vec2(1.));
  vec2 uv=(gl_FragCoord.xy-.5*res)/min(res.x,res.y);
  vec2 pointer=(u_pointer-.5)*vec2(res.x/res.y,1.);
  float t=u_time*.22;
  float n=fbm(uv*1.55+vec2(t*.58,-t*.32));
  float n2=fbm(uv*3.2+vec2(-t*.22,t*.48)+n*1.3);
  vec2 w=uv+vec2(n-.5,n2-.5)*.43;
  float a=exp(-abs(w.y-.28*sin(w.x*2.65+t*2.4+n2*2.8))*7.0);
  float b=exp(-abs(w.y+.2*cos(w.x*3.15-t*1.85+n*3.2))*9.0);
  float c=exp(-abs(w.y-.42*sin(w.x*1.5-t*1.1)-.18)*12.0);
  float pulse=.72+.28*sin(t*3.2+n*5.0);
  float mouse=exp(-length(uv-pointer*.8)*2.7);
  float lines=pow(max(0.,sin((w.x+w.y*.44)*22.0-t*3.0)),18.0);
  float grain=hash(gl_FragCoord.xy+floor(u_time*18.0))-.5;

  vec3 black=vec3(.008,.012,.026);
  vec3 blue=vec3(.015,.18,1.0);
  vec3 cyan=vec3(.04,.73,1.0);
  vec3 lime=vec3(.62,1.0,.08);
  vec3 col=black;
  col+=blue*a*(.7+n*.9);
  col+=cyan*b*.7;
  col+=blue*c*.72*pulse;
  col+=lime*a*mouse*.28;
  col+=cyan*mouse*.17;
  col+=vec3(.56,.66,1.)*lines*(a+b)*.22;
  col*=1.0-smoothstep(.45,1.35,length(uv))*.82;
  col*=1.0-u_scroll*.35;
  col+=grain*.02;
  gl_FragColor=vec4(col,1.0);
}
`;

function shader(gl, type, source) {
  const value = gl.createShader(type);
  gl.shaderSource(value, source);
  gl.compileShader(value);
  if (!gl.getShaderParameter(value, gl.COMPILE_STATUS)) return null;
  return value;
}

export default function MotionFieldV2({ className }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const gl = canvas?.getContext("webgl", { antialias: false, alpha: false, powerPreference: "high-performance" });
    if (!gl) return undefined;
    const vertex = shader(gl, gl.VERTEX_SHADER, vertexShader);
    const fragment = shader(gl, gl.FRAGMENT_SHADER, fragmentShader);
    if (!vertex || !fragment) return undefined;
    const program = gl.createProgram();
    gl.attachShader(program, vertex); gl.attachShader(program, fragment); gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return undefined;
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]), gl.STATIC_DRAW);
    gl.useProgram(program);
    const position = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(position); gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
    const resolution = gl.getUniformLocation(program, "u_resolution");
    const pointerUniform = gl.getUniformLocation(program, "u_pointer");
    const time = gl.getUniformLocation(program, "u_time");
    const scroll = gl.getUniformLocation(program, "u_scroll");
    const pointer = { x: .72, y: .42, tx: .72, ty: .42 };
    const start = performance.now();
    let raf = 0;

    const move = (event) => {
      pointer.tx = event.clientX / Math.max(window.innerWidth, 1);
      pointer.ty = 1 - event.clientY / Math.max(window.innerHeight, 1);
    };
    const render = (now) => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, window.innerWidth < 700 ? 1.15 : 1.35);
      const width = Math.max(1, Math.round(rect.width*dpr));
      const height = Math.max(1, Math.round(rect.height*dpr));
      if (canvas.width !== width || canvas.height !== height) { canvas.width=width; canvas.height=height; }
      gl.viewport(0,0,width,height);
      pointer.x += (pointer.tx-pointer.x)*.06; pointer.y += (pointer.ty-pointer.y)*.06;
      gl.uniform2f(resolution,width,height); gl.uniform2f(pointerUniform,pointer.x,pointer.y);
      gl.uniform1f(time,reduced?0:(now-start)/1000);
      gl.uniform1f(scroll,Math.min(window.scrollY/Math.max(window.innerHeight,1),1));
      gl.drawArrays(gl.TRIANGLES,0,6);
      if(!reduced && !document.hidden) raf=requestAnimationFrame(render);
    };
    window.addEventListener("pointermove", move, { passive: true });
    if(reduced) render(start); else raf=requestAnimationFrame(render);
    return () => {
      window.removeEventListener("pointermove", move); if(raf) cancelAnimationFrame(raf);
      gl.deleteBuffer(buffer); gl.deleteProgram(program); gl.deleteShader(vertex); gl.deleteShader(fragment);
    };
  }, []);

  return <canvas className={className} ref={canvasRef} aria-hidden="true" />;
}
