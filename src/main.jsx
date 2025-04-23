import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { preloadImage } from "./utils/preload";

const queryClient = new QueryClient();

// preloadImage(
//   "https://ik.imagekit.io/40czoqvvk/category_thumbnail_optimized/Machine%20Learning.webp?tr=w-1280,f-auto",
// );

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <StrictMode>
      <App />
    </StrictMode>
  </QueryClientProvider>,
);
