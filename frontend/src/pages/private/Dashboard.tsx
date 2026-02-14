import CodeBlock from "@/components/private/CodeBlock/CodeBlock";
import Review from "@/components/private/Review/Review";
import { useState } from "react";
import type { SubmitEvent } from "react";
import { useMutation } from "@tanstack/react-query";
import { generateReview } from "@/helpers/helpers";
import { toast } from "sonner";

const Dashboard = () => {
  const [code, setCode] = useState(`console.log("Hello World");`);

  const reviewMutation = useMutation({
    mutationFn: generateReview,
    onSuccess: () => {
      toast.success("Review created correctly");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (typeof code !== "string") {
      return toast.error("Error submitting the form");
    }

    reviewMutation.mutate(code);
  };

  return (
    <div className="w-full h-full flex flex-col lg:flex-row gap-6 overflow-hidden">
      <CodeBlock
        handleSubmit={handleSubmit}
        code={code}
        setCode={setCode}
        review={reviewMutation.data}
        pending={reviewMutation.isPending}
      />
      <Review
        key={reviewMutation.data ? JSON.stringify(reviewMutation.data) : "empty"}
        review={reviewMutation.data}
        pending={reviewMutation.isPending}
      />
    </div>
  );
};

export default Dashboard;
