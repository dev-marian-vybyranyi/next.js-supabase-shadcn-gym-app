import { UserButton } from "@clerk/nextjs";

const AccountPage = () => {
  return (
    <div className="p-5">
      <h1>AccountPage</h1>
      <UserButton fallback="/" afterSignOutUrl="/" />
    </div>
  );
};

export default AccountPage;
