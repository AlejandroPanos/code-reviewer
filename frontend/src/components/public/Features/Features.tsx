import { Blocks, Bot, ChartPie, Film, MessageCircle, Settings2 } from "lucide-react";

const features = [
  {
    icon: Settings2,
    title: "Any Language",
    description:
      "Paste your code no matter what language is written in and get detailed feedback on it in seconds.",
  },
  {
    icon: Bot,
    title: "AI-Powered",
    description:
      "Our trained AI model will spit back the best feedback on 4 categories so you can write better & safer code.",
  },
  {
    icon: Blocks,
    title: "Scalable",
    description:
      "Our tool scales with you. Start completely for free with 5 reviews per day and upgrade as you go.",
  },
  {
    icon: Film,
    title: "Check History",
    description:
      "Check your review history to make sure you are not repeting the same mistakes in your code over and over.",
  },
  {
    icon: ChartPie,
    title: "Advanced Scoring",
    description:
      "Get a score on every single code review that you make so you know exactly where you are falling short.",
  },
  {
    icon: MessageCircle,
    title: "Premium Support",
    description:
      "If you have any questions, feedback or encounter any bugs, we are there to help you no matter what.",
  },
];

const Features = () => {
  return (
    <section id="features" className="flex min-h-screen items-center justify-center py-12">
      <div>
        <h2 className="text-center font-semibold text-4xl tracking-tight sm:text-5xl">
          Better Code – In Seconds
        </h2>
        <div className="mx-auto mt-10 grid max-w-(--breakpoint-lg) gap-6 px-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div className="flex flex-col rounded-xl border px-5 py-6" key={feature.title}>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                <feature.icon className="size-5" />
              </div>
              <span className="font-semibold text-lg">{feature.title}</span>
              <p className="mt-1 text-[15px] text-foreground/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
