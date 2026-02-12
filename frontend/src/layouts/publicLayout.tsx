import { Outlet } from "react-router";

const PublicLayout = () => {
  return (
    <>
      <h1>Navbar</h1>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default PublicLayout;
