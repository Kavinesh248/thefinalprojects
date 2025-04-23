import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import Dashboard from "./pages/Dashboard";

const MainLayout = lazy(() => import("./pages/MainLayout"));
// const Dashboard = lazy(() => import("./pages/Dashboard"));
const Learning = lazy(() => import("./pages/Learning"));
const FutureProject = lazy(() => import("./pages/FutureProject"));
const ReferralProgram = lazy(() => import("./pages/ReferralProgram"));
const Review = lazy(() => import("./pages/Review"));
const ErrorPage = lazy(() => import("./pages/Error"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div className="loader"></div>}>
        <MainLayout />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Navigate to="/dashboard" replace /> },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "mylearning",
        element: (
          <Suspense fallback={<div>Loading Learning...</div>}>
            <Learning />
          </Suspense>
        ),
      },
      {
        path: "futureprojects",
        element: (
          <Suspense fallback={<div>Loading Future Projects...</div>}>
            <FutureProject />
          </Suspense>
        ),
      },
      {
        path: "referral",
        element: (
          <Suspense fallback={<div>Loading Referral Program...</div>}>
            <ReferralProgram />
          </Suspense>
        ),
      },
      {
        path: "review",
        element: (
          <Suspense fallback={<div>Loading Review...</div>}>
            <Review />
          </Suspense>
        ),
      },
    ],
  },
]);

export default function RouterComponent() {
  return <RouterProvider router={router} />;
}
