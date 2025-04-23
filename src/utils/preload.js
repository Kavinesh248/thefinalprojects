export const preloadImage = (url) => {
  const link = document.createElement("link");
  link.rel = "preload";
  link.as = "image";
  link.href = url;
  link.type = "image/webp";
  document.head.appendChild(link);
};
