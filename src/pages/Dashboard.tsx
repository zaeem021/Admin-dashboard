import { Users, ShoppingCart, DollarSign, TrendingUp } from "lucide-react";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import StatCard from "@/components/dashboard/StatCard";
import { statsData, revenueChartData, salesChartData, orderDistributionData } from "@/data/mockData";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-foreground">Dashboard</h1>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Total Users" value={statsData.totalUsers.toLocaleString()} icon={Users} trend="+12% from last month" />
        <StatCard title="Total Orders" value={statsData.totalOrders.toLocaleString()} icon={ShoppingCart} trend="+8% from last month" />
        <StatCard title="Revenue" value={`$${statsData.totalRevenue.toLocaleString()}`} icon={DollarSign} trend="+18% from last month" />
        <StatCard title="Sales" value={statsData.totalSales.toLocaleString()} icon={TrendingUp} trend="+5% from last month" />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Revenue Line Chart */}
        <div className="rounded-xl border border-border bg-card p-4 shadow-sm md:p-6">
          <h2 className="mb-4 text-base font-medium text-card-foreground">Revenue Trend</h2>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={revenueChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid hsl(var(--border))", background: "hsl(var(--card))" }} />
              <Line type="monotone" dataKey="revenue" stroke="hsl(var(--primary))" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Sales Bar Chart */}
        <div className="rounded-xl border border-border bg-card p-4 shadow-sm md:p-6">
          <h2 className="mb-4 text-base font-medium text-card-foreground">Monthly Sales</h2>
          <ResponsiveContainer width="100%" height={280}>
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

      {/* Pie Chart */}
      <div className="rounded-xl border border-border bg-card p-4 shadow-sm md:p-6">
        <h2 className="mb-4 text-base font-medium text-card-foreground">Order Distribution</h2>
        <ResponsiveContainer width="100%" height={280}>
          <PieChart>
            <Pie data={orderDistributionData} cx="50%" cy="50%" outerRadius={100} dataKey="value" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} fontSize={12}>
              {orderDistributionData.map((entry, index) => (
                <Cell key={index} fill={entry.fill} />
              ))}
            </Pie>
            <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid hsl(var(--border))", background: "hsl(var(--card))" }} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
