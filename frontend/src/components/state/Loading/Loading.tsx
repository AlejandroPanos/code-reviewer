import { Loader2 } from "lucide-react";

interface LoadingProps {
  message: string;
}

const Loading = ({ message }: LoadingProps) => {
  return (
    <>
      <div className="flex-1 h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
          <p className="text-sm text-muted-foreground">{message}</p>
        </div>
      </div>
    </>
  );
};

export default Loading;
