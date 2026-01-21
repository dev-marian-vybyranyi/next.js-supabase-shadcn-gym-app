import React, { useEffect } from "react";
import DashboardCard from "./dashboard-card";
import { getUsersReport, getSubscriptionsReport } from "@/actions/dashboard";
import toast from "react-hot-toast";
import { useState } from "react";

function AdminDashboard() {
  const [userData = {}, setUserData] = useState<any>({
    users_count: 0,
    customers_count: 0,
    admins_count: 0,
  });

  const [subscriptionData = {}, setSubscriptionData] = useState<any>({
    total_subscriptions: 0,
    revenue: 0,
  });

  const fetchData = async () => {
    try {
      const usersResportResponse: any = await getUsersReport();
      if (usersResportResponse.success) {
        setUserData(usersResportResponse.data);
      } else {
        toast.error(usersResportResponse.message);
      }
    } catch (error) {
      toast.error("An error occured while fetching data");
    }

    try {
      const subscriptionsReportResponse: any = await getSubscriptionsReport();
      if (subscriptionsReportResponse.success) {
        setSubscriptionData(subscriptionsReportResponse.data);
      } else {
        toast.error(subscriptionsReportResponse.message);
      }
    } catch (error) {
      toast.error("An error occured while fetching data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <h1 className="text-sm font-bold">Users / Customers</h1>
        <div className="grid grid-cols-4 mt-2 gap-5">
          <DashboardCard
            value={userData.users_count || 0}
            name="Total Users"
            description="Total number of users"
          />

          <DashboardCard
            value={userData.customers_count || 0}
            name="Total Customers"
            description="Total number of customers"
          />

          <DashboardCard
            value={userData.admins_count || 0}
            name="Total Admins"
            description="Total number of admins"
          />
        </div>
      </div>
      <div className="mt-7">
        <h1 className="text-sm font-bold">Subscriptions</h1>
        <div className="grid grid-cols-4 mt-2 gap-5">
          <DashboardCard
            value={subscriptionData.total_subscriptions || 0}
            name="Total Subscriptions"
            description="Total number of subscriptions"
          />

          <DashboardCard
            value={subscriptionData.revenue || 0}
            name="Revenue"
            description="Total revenue generated"
          />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
