import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

const AccountPage = async () => {
  const result = await currentUser();
  console.log(result);

  const name = result?.firstName + " " + result?.lastName;
  const clerkUserId = result?.id;
  const email = result?.emailAddresses[0].emailAddress;

  return (
    <div className="p-5">
      <h1>AccountPage</h1>
      <UserButton fallback="/" afterSignOutUrl="/" />
      <h1>{name}</h1>
      <h1>{clerkUserId}</h1>
      <h1>{email}</h1>
    </div>
  );
};

export default AccountPage;
