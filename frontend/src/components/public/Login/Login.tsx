import type { SubmitEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { login } from "@/helpers/helpers";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";

const Login = () => {
  const { dispatch } = useAuth();
  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      dispatch({ type: "REGISTER", payload: data });
      navigate("/dashboard");
      toast.success("User logged correctly");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    if (typeof email !== "string" || typeof password !== "string") {
      console.log(typeof email, typeof password);
      toast.error("Please fill in all inputs correctly");
      return;
    }

    const user = { email, password };
    loginMutation.mutate(user);
  };

  return (
    <>
      <main className="w-full h-screen flex items-center justify-center">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Login to your account</CardTitle>
            <CardDescription>Enter your email below to login to your account</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="johndoe@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="********"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col items-start gap-1 mt-4">
                <Button type="submit" className="w-full">
                  Login
                </Button>
                <p className="text-xs text-neutral-400">
                  Don't have an account yet?{" "}
                  <a className="underline" href="/register">
                    Register
                  </a>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </>
  );
};

export default Login;
