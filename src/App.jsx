import { lazy } from "react";

const RouterComponent = lazy(() => import("./RouterComponent"));

export default function App() {
  return <RouterComponent />;
}
