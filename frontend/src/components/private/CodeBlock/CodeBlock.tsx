import { Button } from "@/components/ui/button";
import { ArrowRight, Save } from "lucide-react";
import type { ReviewType } from "@/types/types";
import { saveReview } from "@/helpers/helpers";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { format } from "date-fns";
import { useAuth } from "@/hooks/useAuth";

interface CodeBlockProps {
  handleSubmit: (event: React.SubmitEvent<HTMLFormElement>) => void;
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  pending: boolean;
  review?: ReviewType;
}

const CodeBlock = ({ handleSubmit, code, setCode, review, pending }: CodeBlockProps) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const saveMutation = useMutation({
    mutationFn: saveReview,
    onSuccess: () => {
      navigate("/reviews");
      toast.success("Review saved correctly", { position: "top-right" });
    },
    onError: (error) => {
      toast.success(error.message, { position: "top-right" });
    },
  });

  const handleSave = () => {
    if (!review) {
      toast.error("No review to save");
      return;
    }

    const reviewToSave = {
      title: format(new Date(), "dd/MM/yyyy"),
      code: code,
      ...review,
    };

    saveMutation.mutate(reviewToSave);
  };

  return (
    <form onSubmit={handleSubmit} className="flex-1 min-w-0 h-full flex flex-col gap-4">
      <textarea
        className="flex-1 p-4 text-xs border border-neutral-800 rounded-lg resize-none"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        name="code"
        id="code"
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
        }}
      />
      <div className="flex flex-col md:flex-row items-center gap-2">
        <Button
          disabled={pending || user?.dailyReviewsGenerated! >= 5}
          variant="outline"
          type="submit"
          className="flex-1 w-full hover:cursor-pointer disabled:pointer-events-none"
        >
          {pending ? "Reviewing code..." : "Review Code"}
          <ArrowRight className="w-4 h-4" />
        </Button>
        <Button
          onClick={handleSave}
          className="flex-1 w-full hover:cursor-pointer disabled:pointer-events-none"
          disabled={!review || pending}
        >
          {saveMutation.isPending ? "Saving review..." : "Save Review"}
          <Save className="w-4 h-4" />
        </Button>
      </div>
    </form>
  );
};

export default CodeBlock;
