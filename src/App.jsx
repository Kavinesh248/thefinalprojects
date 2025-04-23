import { lazy } from "react";

const Router = lazy(() => import("./RouterComponent"));

export default function App() {
  return <Router />;
}
