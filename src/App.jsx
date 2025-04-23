import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { lazy, Suspense } from "react";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Learning = lazy(() => import("./pages/Learning"));
const FutureProject = lazy(() => import("./pages/FutureProject"));
const Home = lazy(() => import("./pages/Home"));
const ErrorPage = lazy(() => import("./pages/Error"));
const ReferralProgram = lazy(() => import("./pages/ReferralProgram"));
const Review = lazy(() => import("./pages/Review"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Navigate to="/dashboard" replace /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "mylearning", element: <Learning /> },
      { path: "futureprojects", element: <FutureProject /> },
      { path: "referral", element: <ReferralProgram /> },
      { path: "review", element: <Review /> },
    ],
  },
]);

const App = function () {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />;
    </Suspense>
  );
};

export default App;
