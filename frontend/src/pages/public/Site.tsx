import Hero from "@/components/public/Hero/Hero";
import Features from "@/components/public/Features/Features";
import Testimonials from "@/components/public/Testimonials/Testimonials";

const Site = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-16">
        <Hero />
        <Features />
        <Testimonials />
      </div>
    </>
  );
};

export default Site;
