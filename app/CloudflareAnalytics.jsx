"use client";

import { useEffect } from "react";

export default function CloudflareAnalytics({ token }) {
  useEffect(() => {
    if (["localhost", "127.0.0.1"].includes(window.location.hostname)) return undefined;
    const script = document.createElement("script");
    script.src = "https://static.cloudflareinsights.com/beacon.min.js";
    script.defer = true;
    script.dataset.cfBeacon = JSON.stringify({ token });
    document.body.appendChild(script);
    return () => script.remove();
  }, [token]);
  return null;
}
