import { DollarSign, TrendingUp, ArrowUpRight } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import StatCard from "@/components/dashboard/StatCard";
import { revenueChartData, statsData } from "@/data/mockData";

const RevenuePage = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-foreground">Revenue</h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard title="Total Revenue" value={`$${statsData.totalRevenue.toLocaleString()}`} icon={DollarSign} trend="+18% from last month" />
        <StatCard title="Monthly Growth" value="12.4%" icon={TrendingUp} trend="Avg over 6 months" />
        <StatCard title="Projected Annual" value="$480K" icon={ArrowUpRight} trend="Based on current trend" />
      </div>

      <div className="rounded-xl border border-border bg-card p-4 shadow-sm md:p-6">
        <h2 className="mb-4 text-base font-medium text-card-foreground">Revenue Trend</h2>
        <ResponsiveContainer width="100%" height={320}>
          <AreaChart data={revenueChartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid hsl(var(--border))", background: "hsl(var(--card))" }} />
            <Area type="monotone" dataKey="revenue" stroke="hsl(var(--primary))" fill="hsl(var(--primary) / 0.1)" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenuePage;
