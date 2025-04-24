import { useEffect } from "react";

export function usePreloadImage(url) {
  useEffect(() => {
    if (!url) return;
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = url;
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, [url]);
}
