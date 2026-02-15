import type { SubmitEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { register } from "@/helpers/helpers";
import { useAuth } from "@/hooks/useAuth";

const Register = () => {
  const { dispatch } = useAuth();
  const navigate = useNavigate();

  const registerMutation = useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      dispatch({ type: "REGISTER", payload: data });
      navigate("/dashboard");
      toast.success("User registered correctly", { position: "top-right" });
    },
    onError: (error) => {
      toast.error(error.message, { position: "top-right" });
    },
  });

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    if (typeof name !== "string" || typeof email !== "string" || typeof password !== "string") {
      toast.error("Please fill in all inputs correctly");
      return;
    }

    const user = { name, email, password };
    registerMutation.mutate(user);
  };

  return (
    <>
      <main className="w-full h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Create your account</CardTitle>
            <CardDescription>Enter your details below to create your account</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="John Doe"
                    required
                  />
                </div>
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
                <Button disabled={registerMutation.isPending} type="submit" className="w-full">
                  {registerMutation.isPending ? "Creating your account..." : "Register"}
                </Button>
                <p className="text-xs text-neutral-400">
                  Already have an account?{" "}
                  <a className="underline" href="/login">
                    Log In
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

export default Register;
