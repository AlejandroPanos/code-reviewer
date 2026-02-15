import { Field, FieldLabel } from "@/components/ui/field";
import { Progress } from "@/components/ui/progress";
import { useAuth } from "@/hooks/useAuth";

const ProfileUsage = () => {
  const { user } = useAuth();
  return (
    <>
      <div className="w-full p-4 border border-neutral-800 rounded-xl flex flex-col items-start justify-between gap-4">
        <h2>Your daily usage</h2>
        <Field className="w-full">
          <FieldLabel htmlFor="progress-upload" className="-mb-1 text-xs text-neutral-400">
            <span>Reviews generated today</span>
            <span className="ml-auto">{user?.dailyReviewsGenerated}/5</span>
          </FieldLabel>
          <Progress
            value={(user?.dailyReviewsGenerated! / 5) * 100}
            id="progress-upload"
            className={`h-1.5 ${user?.dailyReviewsGenerated! >= 5 ? "[&>div]:bg-red-500" : "[&>div]:bg-blue-500"}`}
          />
        </Field>
        <p className="text-xs text-neutral-400">
          Want more review credits?{" "}
          <a className="underline italic" href="#">
            Get in touch with us
          </a>
        </p>
      </div>
    </>
  );
};

export default ProfileUsage;
