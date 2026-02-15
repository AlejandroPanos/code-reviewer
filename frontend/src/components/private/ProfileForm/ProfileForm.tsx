import type { SubmitEvent } from "react";
import { Input } from "@/components/ui/input";
import { Field, FieldLabel, FieldDescription } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import { updateProfile } from "@/helpers/helpers";
import { toast } from "sonner";

const ProfileForm = () => {
  const { user, dispatch } = useAuth();

  const updateMutation = useMutation({
    mutationFn: updateProfile,
    onSuccess: (data) => {
      const user = data.user;
      dispatch({ type: "UPDATE_USER", payload: user });
      toast.success("Updated profile correctly", { position: "top-right" });
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
      throw new Error("All input fields msut be filled correctly");
    }

    const updatedUser = { name, email, password };

    if (window.confirm("Are you sure you want to update your profile?")) {
      updateMutation.mutate(updatedUser);
    }
  };

  return (
    <>
      <div className="w-full p-4 border border-neutral-800 rounded-xl flex flex-col items-start justify-between gap-4">
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-start justify-between gap-4"
        >
          <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-4">
            <Field>
              <FieldLabel htmlFor="username">Username</FieldLabel>
              <Input id="username" name="username" type="text" defaultValue={user?.name} />
            </Field>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input id="email" name="email" type="email" defaultValue={user?.email} />
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input id="password" name="password" type="password" placeholder="********" />
              <FieldDescription className="text-xs">
                Leave empty to keep current password.
              </FieldDescription>
            </Field>
          </div>
          <Button
            disabled={updateMutation.isPending}
            type="submit"
            className="w-full hover:cursor-pointer"
          >
            {updateMutation.isPending ? "Updating Profile..." : "Update Profile"}
            <ArrowRight />
          </Button>
        </form>
      </div>
    </>
  );
};

export default ProfileForm;
