import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BackgroundPattern } from "@/components/background-pattern";

export default function Hero() {
  return (
    <section id="home" className="flex min-h-screen items-center justify-center px-6">
      <BackgroundPattern />

      <div className="relative z-10 max-w-3xl text-center">
        <Badge asChild className="rounded-full border-border py-1" variant="secondary">
          <Link to="/register">
            Just released v1.0.0 <ArrowUpRight className="ml-1 size-4" />
          </Link>
        </Badge>
        <h1 className="mt-6 font-semibold text-4xl tracking-tighter sm:text-5xl md:text-6xl md:leading-[1.2] lg:text-7xl">
          The Tool to Review any Code Snippet in Seconds
        </h1>
        <p className="mt-6 text-foreground/80 md:text-lg">
          Review any code snippet within seconds. Our AI detects your coding language and spits back
          highly personalised feedback on that specific block of code.
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <Button asChild className="rounded-full text-base" size="lg">
            <Link to="/register">
              Get Started <ArrowUpRight className="h-5 w-5" />
            </Link>
          </Button>
          <Button
            asChild
            className="rounded-full text-base shadow-none"
            size="lg"
            variant="outline"
          >
            <Link to="/login">
              Sign In <ArrowUpRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
