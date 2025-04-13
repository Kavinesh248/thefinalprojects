export const getYouTubeEmbedUrl = (url) => {
  if (!url) return null;
  // Match youtube.com/watch?v=ID
  let videoIdMatch = url.match(/(?:v=)([^&]+)/);
  if (videoIdMatch)
    return `https://www.youtube.com/embed/${videoIdMatch[1]}?rel=0&modestbranding=1`;
  // Match youtu.be/ID
  videoIdMatch = url.match(/youtu\.be\/([^?]+)/);
  if (videoIdMatch)
    return `https://www.youtube.com/embed/${videoIdMatch[1]}?rel=0&modestbranding=1`;
  // Match youtube.com/embed/ID
  videoIdMatch = url.match(/embed\/([^?]+)/);
  if (videoIdMatch)
    return `https://www.youtube.com/embed/${videoIdMatch[1]}?rel=0&modestbranding=1`;
  return null;
};
