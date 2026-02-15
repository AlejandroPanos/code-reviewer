import Hero from "@/components/public/Hero/Hero";
import Features from "@/components/public/Features/Features";

const Site = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-16">
        <Hero />
        <Features />
      </div>
    </>
  );
};

export default Site;
