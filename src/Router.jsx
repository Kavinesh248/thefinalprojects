import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { lazy } from "react";

const MainLayout = lazy(() => import("./pages/MainLayout"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Learning = lazy(() => import("./pages/Learning"));
const FutureProject = lazy(() => import("./pages/FutureProject"));
const ReferralProgram = lazy(() => import("./pages/ReferralProgram"));
const Review = lazy(() => import("./pages/Review"));
const ErrorPage = lazy(() => import("./pages/Error"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
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

export default function Router() {
  return <RouterProvider router={router} />;
}
