import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
// import { lazy, Suspense } from "react";

/* Layouts */
import PublicLayout from "./layouts/PublicLayout";
import PrivateLayout from "./layouts/PrivateLayout";

/* Public Pages */
import Site from "./pages/public/Site";

/* Private Pages */
import Dashboard from "./pages/private/Dashboard";
import Reviews from "./pages/private/Reviews";
import Profile from "./pages/private/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [{ index: true, element: <Site /> }],
  },
  {
    path: "/",
    element: <PrivateLayout />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "reviews", element: <Reviews /> },
      { path: "profile", element: <Profile /> },
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
