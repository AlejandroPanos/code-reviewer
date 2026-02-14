import { Input } from "@/components/ui/input";
import { Field, FieldLabel, FieldDescription } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";

const ProfileForm = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full p-4 border border-neutral-800 rounded-xl flex flex-col items-start justify-between gap-4">
        <form className="w-full flex flex-col lg:flex-row items-start justify-between gap-4">
          <Field>
            <FieldLabel htmlFor="username">Username</FieldLabel>
            <Input id="username" type="text" defaultValue={user?.name} />
          </Field>
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input id="email" type="email" defaultValue={user?.email} />
          </Field>
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Input id="password" type="password" placeholder="********" />
            <FieldDescription>Leave empty to keep current password.</FieldDescription>
          </Field>
        </form>
        <Button type="submit" className="w-full hover:cursor-pointer">
          Update Account
          <ArrowRight />
        </Button>
      </div>
    </>
  );
};

export default ProfileForm;
