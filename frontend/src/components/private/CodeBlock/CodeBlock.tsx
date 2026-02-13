import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CodeBlock = () => {
  const [code, setCode] = useState(`console.log("Hello World");`);

  return (
    <form className="flex-1 min-w-0 h-full flex flex-col gap-4">
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
      <Button variant="outline" type="submit" className="w-full hover:cursor-pointer">
        Review Code
        <ArrowRight className="w-4 h-4" />
      </Button>
    </form>
  );
};

export default CodeBlock;
