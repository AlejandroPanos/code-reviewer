import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
// import { lazy, Suspense } from "react";

/* Always needed */
import PublicRoute from "./components/routes/PublicRoute";
import PrivateRoute from "./components/routes/PrivateRoute";

/* Layouts */
import PublicLayout from "./layouts/PublicLayout";
import PrivateLayout from "./layouts/PrivateLayout";

/* Public Pages */
import Site from "./pages/public/Site";
import Register from "./components/public/Register/Register";
import Login from "./components/public/Login/Login";

/* Private Pages */
import Dashboard from "./pages/private/Dashboard";
import Reviews from "./pages/private/Reviews";
import Profile from "./pages/private/Profile";
import ReviewDetail from "./pages/private/ReviewDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: (
          <PublicRoute>
            <Site />
          </PublicRoute>
        ),
      },
    ],
  },
  {
    path: "/register",
    element: (
      <PublicRoute>
        <Register />
      </PublicRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  {
    path: "/",
    element: <PrivateLayout />,
    children: [
      {
        path: "dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "reviews",
        element: (
          <PrivateRoute>
            <Reviews />
          </PrivateRoute>
        ),
      },
      {
        path: "reviews/:id",
        element: (
          <PrivateRoute>
            <ReviewDetail />
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
