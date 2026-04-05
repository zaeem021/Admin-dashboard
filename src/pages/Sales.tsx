import { TrendingUp, ShoppingCart, Target } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import StatCard from "@/components/dashboard/StatCard";
import { salesChartData, statsData } from "@/data/mockData";

const SalesPage = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-foreground">Sales</h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard title="Total Sales" value={statsData.totalSales.toLocaleString()} icon={TrendingUp} trend="+5% from last month" />
        <StatCard title="Avg. Order Value" value="$28.89" icon={ShoppingCart} trend="+3% from last month" />
        <StatCard title="Conversion Rate" value="3.2%" icon={Target} trend="+0.4% from last month" />
      </div>

      <div className="rounded-xl border border-border bg-card p-4 shadow-sm md:p-6">
        <h2 className="mb-4 text-base font-medium text-card-foreground">Sales Overview</h2>
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={salesChartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid hsl(var(--border))", background: "hsl(var(--card))" }} />
            <Bar dataKey="sales" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesPage;
