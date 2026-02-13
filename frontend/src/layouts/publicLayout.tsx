import { Outlet } from "react-router";
import Navbar from "@/components/public/Navbar/Navbar";

const PublicLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default PublicLayout;
