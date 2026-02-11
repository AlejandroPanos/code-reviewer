import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
