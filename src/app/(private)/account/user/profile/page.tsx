"use client";

import usersGlobalStore, {
  IUsersGlobalStore,
} from "@/global-store/users-store";

const UserProfilePage = () => {
  const { user } = usersGlobalStore() as IUsersGlobalStore;
  return <div>
    <h1>Welcome {user?.name}</h1>
  </div>;
};

export default UserProfilePage;
