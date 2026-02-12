import { Outlet } from "react-router";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Aside from "@/components/private/Aside/Aside";

const PrivateLayout = () => {
  return (
    <>
      <SidebarProvider>
        <Aside />

        <div className="flex-1 flex flex-col h-screen overflow-hidden">
          <header className="border-b p-4 flex items-center gap-4 shrink-0">
            <SidebarTrigger />
            <h1 className="text-xl font-semibold">Dashboard</h1>
          </header>
          <main className="flex-1 p-6 overflow-hidden">
            <Outlet />
          </main>
        </div>
      </SidebarProvider>
    </>
  );
};

export default PrivateLayout;
