import { ordersData } from "@/data/mockData";
import { DataTable, statusVariant } from "@/components/shared/DataTable";
import { Badge } from "@/components/ui/badge";

const columns = [
  { key: "product", label: "Product" },
  {
    key: "price",
    label: "Price",
    render: (value: number) => `$${value.toFixed(2)}`,
  },
  {
    key: "status",
    label: "Status",
    render: (value: string) => <Badge variant={statusVariant(value)}>{value}</Badge>,
  },
];

const OrdersPage = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-foreground">Orders</h1>
      <DataTable columns={columns} data={ordersData} title="Orders" />
    </div>
  );
};

export default OrdersPage;
