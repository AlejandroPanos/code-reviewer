import ProfileForm from "@/components/private/ProfileForm/ProfileForm";
import ProfileUsage from "@/components/private/ProfileUsage/ProfileUsage";

const Profile = () => {
  return (
    <>
      <div className="flex flex-col items-start gap-8">
        <ProfileForm />
        <ProfileUsage />
      </div>
    </>
  );
};

export default Profile;
