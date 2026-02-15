import Hero from "@/components/public/Hero/Hero";
import Features from "@/components/public/Features/Features";
import Testimonials from "@/components/public/Testimonials/Testimonials";
import Footer from "@/components/public/Footer/Footer";

const Site = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-16">
        <Hero />
        <Features />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default Site;
