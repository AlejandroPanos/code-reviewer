import { Outlet } from "react-router";
import Navbar from "@/components/public/Navbar/Navbar";
import LightRays from "@/components/LightRays";

const PublicLayout = () => {
  return (
    <>
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <LightRays
          raysOrigin="top-right"
          raysColor="#ffffff"
          raysSpeed={1}
          lightSpread={0.5}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
          className="custom-rays"
          pulsating={false}
          fadeDistance={1}
          saturation={1}
        />
      </div>
      <Navbar />
      <main>
        <div className="max-w-300 mx-auto px-8">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default PublicLayout;
