import { Suspense, lazy } from "react";

const Router = lazy(() => import("./Router"));

export default function App() {
  return (
    <Suspense fallback={<div>Loading app...</div>}>
      <Router />
    </Suspense>
  );
}
