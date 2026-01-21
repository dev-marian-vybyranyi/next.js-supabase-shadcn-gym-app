"use client";

import { getAllUsers } from "@/actions/users";
import PageTitle from "@/components/ui/page-title";
import Spinner from "@/components/ui/spinner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IUser } from "@/interfaces";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function AdminUsersListPage() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response: any = await getAllUsers();
      if (!response.success) {
        toast.error("Failed to fetch users");
      }
      setUsers(response.data);
    } catch (error) {
      toast.error("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    "User ID",
    "Name",
    "Email",
    "Is Admin",
    "Is Active",
    "Created At",
  ];

  return (
    <div>
      <PageTitle title="Users" />

      {loading && <Spinner parentHeight={150} />}

      {!users.length && !loading && (
        <p className="text-sm text-gray-600">
          You do not have any users at the moment.
        </p>
      )}

      {users.length > 0 && !loading && (
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-100">
              {columns.map((column) => (
                <TableHead className="font-bold" key={column}>
                  {column}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((item: IUser) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.is_admin ? "Yes" : "No"}</TableCell>
                <TableCell>{item.is_active ? "Yes" : "No"}</TableCell>
                <TableCell>
                  {dayjs(item.created_at).format("MMM DD , YYYY hh:mm A")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}

export default AdminUsersListPage;
