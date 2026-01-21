import { getCurrentUserFromSupabase } from "@/actions/users";
import { IUser } from "@/interfaces";
import { ReactNode, useEffect, useState } from "react";
import toast from "react-hot-toast";
import Header from "./header";

const PrivateLayout = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);

  const fetchUser = async () => {
    try {
      const response: any = await getCurrentUserFromSupabase();
      if (!response.success) {
        throw new Error(response.error);
      } else {
        setUser(response.data);
      }
    } catch (error) {
      toast.error("An error occurred while fetching user data");
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <Header user={user} />
      <div className="p-5">{children}</div>
    </div>
  );
};

export default PrivateLayout;
