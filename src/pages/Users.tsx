import { usersData } from "@/data/mockData";
import { DataTable, statusVariant } from "@/components/shared/DataTable";
import { Badge } from "@/components/ui/badge";

const columns = [
  { key: "name", label: "Name" },
  { key: "email", label: "Email" },
  {
    key: "status",
    label: "Status",
    render: (value: string) => <Badge variant={statusVariant(value)}>{value}</Badge>,
  },
];

const UsersPage = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-foreground">Users</h1>
      <DataTable columns={columns} data={usersData} title="Users" />
    </div>
  );
};

export default UsersPage;
