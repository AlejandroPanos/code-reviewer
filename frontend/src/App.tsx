import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import type { ReactNode } from "react";
import { lazy, Suspense } from "react";

/* Always needed */
import PublicRoute from "./components/routes/PublicRoute";
import PrivateRoute from "./components/routes/PrivateRoute";
import PublicLayout from "./layouts/PublicLayout";
import PrivateLayout from "./layouts/PrivateLayout";
import Loading from "./components/state/Loading/Loading";

/* Lazy Loading */
const Site = lazy(() => import("./pages/public/Site"));
const Register = lazy(() => import("./components/public/Register/Register"));
const Login = lazy(() => import("./components/public/Login/Login"));
const Dashboard = lazy(() => import("./pages/private/Dashboard"));
const Reviews = lazy(() => import("./pages/private/Reviews"));
const Profile = lazy(() => import("./pages/private/Profile"));
const ReviewDetail = lazy(() => import("./pages/private/ReviewDetail"));

const LazyPage = ({ children }: { children: ReactNode }) => {
  return <Suspense fallback={<Loading message="Loading page" />}>{children}</Suspense>;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: (
          <PublicRoute>
            <LazyPage>
              <Site />
            </LazyPage>
          </PublicRoute>
        ),
      },
    ],
  },
  {
    path: "/register",
    element: (
      <PublicRoute>
        <LazyPage>
          <Register />
        </LazyPage>
      </PublicRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <LazyPage>
          <Login />
        </LazyPage>
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
            <LazyPage>
              <Dashboard />
            </LazyPage>
          </PrivateRoute>
        ),
      },
      {
        path: "reviews",
        element: (
          <PrivateRoute>
            <LazyPage>
              <Reviews />
            </LazyPage>
          </PrivateRoute>
        ),
      },
      {
        path: "reviews/:id",
        element: (
          <PrivateRoute>
            <LazyPage>
              <ReviewDetail />
            </LazyPage>
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <LazyPage>
              <Profile />
            </LazyPage>
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
