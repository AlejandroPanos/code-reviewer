import CodeBlock from "@/components/private/CodeBlock/CodeBlock";
import Review from "@/components/private/Review/Review";

const Dashboard = () => {
  return (
    <div className="w-full h-full flex flex-col lg:flex-row gap-6 overflow-hidden">
      <CodeBlock />
      <Review />
    </div>
  );
};

export default Dashboard;
