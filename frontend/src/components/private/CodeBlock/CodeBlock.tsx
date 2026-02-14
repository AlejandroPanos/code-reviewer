import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CodeBlockProps {
  handleSubmit: (event: React.SubmitEvent<HTMLFormElement>) => void;
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  pending: boolean;
}

const CodeBlock = ({ handleSubmit, code, setCode, pending }: CodeBlockProps) => {
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
      <Button
        disabled={pending}
        variant="outline"
        type="submit"
        className="w-full hover:cursor-pointer"
      >
        {pending ? "Reviewing code..." : "Review Code"}
        <ArrowRight className="w-4 h-4" />
      </Button>
    </form>
  );
};

export default CodeBlock;
