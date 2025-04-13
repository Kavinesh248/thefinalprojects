import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Learning from "./pages/Learning";
import FutureProject from "./pages/FutureProject";
import Home from "./pages/Home";
import ErrorPage from "./pages/Error";
import ReferralProgram from "./pages/ReferralProgram";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
// import { CategoryProvider } from "./contexts/CategoryContext";

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
    ],
  },
  {
    path: "/login",
    element: <Login />,
    children: [
      { index: true, element: <Navigate to="/login/signin" replace /> },
      { path: "signin", element: <SignIn /> },
      { path: "signup", element: <SignUp /> },
    ],
  },
]);

const App = function () {
  return <RouterProvider router={router} />;
};

export default App;
