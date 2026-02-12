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

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [{ index: true, element: <Site /> }],
  },
  {
    path: "/",
    element: <PrivateLayout />,
    children: [{ path: "dashboard", element: <Dashboard /> }],
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
