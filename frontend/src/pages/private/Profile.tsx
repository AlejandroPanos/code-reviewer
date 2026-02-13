import { Input } from "@/components/ui/input";
import { Field, FieldLabel, FieldDescription } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowRight } from "lucide-react";

const Profile = () => {
  return (
    <>
      <div className="flex flex-col items-start gap-8">
        <div className="w-full p-4 border border-neutral-800 rounded-xl flex flex-col items-start justify-between gap-4">
          <form className="w-full flex flex-col lg:flex-row items-start justify-between gap-4">
            <Field>
              <FieldLabel htmlFor="username">Username</FieldLabel>
              <Input id="username" type="text" defaultValue="User" />
            </Field>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input id="email" type="email" defaultValue="User" />
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

        <div className="w-full p-4 border border-neutral-800 rounded-xl flex flex-col items-start justify-between gap-4">
          <h2>Your monthly usage</h2>
          <Field className="w-full">
            <FieldLabel htmlFor="progress-upload" className="-mb-1 text-xs text-neutral-400">
              <span>Reviews generated this month</span>
              <span className="ml-auto">12/20</span>
            </FieldLabel>
            <Progress value={60} id="progress-upload" className="h-1.5 [&>div]:bg-blue-500" />
          </Field>
          <p className="text-xs text-neutral-400">
            Want more review credits?{" "}
            <a className="underline italic" href="#">
              Get in touch with us
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Profile;
