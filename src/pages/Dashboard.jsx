import { useState, useEffect } from 'react';
import { Users, ShoppingCart, TrendingUp, DollarSign, Settings } from 'lucide-react';
import StatsCard from '../components/ui/StatsCard';
import LineChart from '../components/charts/LineChart';
import BarChart from '../components/charts/BarChart';
import PieChart from '../components/charts/PieChart';
import LoadingSkeleton from '../components/ui/LoadingSkeleton';
import ErrorState from '../components/ui/ErrorState';
import { getDashboardStats } from '../services/api';
import { generateChartData } from '../utils/helpers';

const Dashboard = () => {
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        fetchDashboardData();
    }, []);

    const fetchDashboardData = async () => {
        try {
            setLoading(true);
            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 800));
            const data = await getDashboardStats();
            setStats(data);
            setChartData(generateChartData());
            setError(null);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const pieData = [
        { name: 'Electronics', value: 400 },
        { name: 'Clothing', value: 300 },
        { name: 'Jewelry', value: 200 },
        { name: 'Home', value: 100 },
    ];

    if (loading) return <LoadingSkeleton type="stats" />;
    if (error) return <ErrorState onRetry={fetchDashboardData} />;

    return (
        <div className="space-y-8 pb-8">
            {/* Page Header */}
            <div>
                <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">Analytics Overview</h1>
                <p className="text-sm text-slate-500 mt-1">Monitor your business performance.</p>
            </div>

            {/* Stats Cards Section */}
            <section className="space-y-4">
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400">Key Metrics</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    <StatsCard
                        title="Total Users"
                        value={stats?.totalUsers}
                        change={12.5}
                        icon={Users}
                        iconBgColor="bg-blue-600"
                    />
                    <StatsCard
                        title="Total Orders"
                        value={stats?.totalOrders}
                        change={-2.4}
                        icon={ShoppingCart}
                        iconBgColor="bg-indigo-600"
                    />
                    <StatsCard
                        title="Total Revenue"
                        value={stats?.totalRevenue ? `$${stats.totalRevenue.toLocaleString()}` : '$0'}
                        change={18.2}
                        icon={DollarSign}
                        iconBgColor="bg-emerald-600"
                    />
                    <StatsCard
                        title="Total Sales"
                        value={stats?.totalSales}
                        change={5.7}
                        icon={TrendingUp}
                        iconBgColor="bg-rose-600"
                    />
                </div>
            </section>

            {/* Charts Section */}
            <section className="space-y-4">
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400">Growth Trends</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <LineChart data={chartData} title="Revenue Timeline" />
                    <BarChart data={chartData} title="Market Sales Volume" />
                </div>
            </section>

            {/* Bottom Section: Distribution & Tools */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Distribution */}
                <section className="space-y-4">
                    <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400">Distribution</h2>
                    <PieChart data={pieData} title="Category Breakdown" />
                </section>

                {/* Tools & Management */}
                <section className="space-y-4 h-full flex flex-col">
                    <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400">Quick Actions</h2>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex-1 flex flex-col justify-center min-h-[250px]">
                        <div className="grid grid-cols-2 gap-4">
                            <button className="p-4 rounded-xl bg-blue-50 text-blue-700 font-bold hover:bg-blue-100 transition-all duration-200 flex flex-col items-center justify-center space-y-3 group active:scale-95 h-full">
                                <div className="p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
                                    <Users className="w-5 h-5" />
                                </div>
                                <span className="text-xs">Add User</span>
                            </button>
                            <button className="p-4 rounded-xl bg-emerald-50 text-emerald-700 font-bold hover:bg-emerald-100 transition-all duration-200 flex flex-col items-center justify-center space-y-3 group active:scale-95 h-full">
                                <div className="p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
                                    <DollarSign className="w-5 h-5" />
                                </div>
                                <span className="text-xs">Invoice</span>
                            </button>
                            <button className="p-4 rounded-xl bg-indigo-50 text-indigo-700 font-bold hover:bg-indigo-100 transition-all duration-200 flex flex-col items-center justify-center space-y-3 group active:scale-95 h-full">
                                <div className="p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
                                    <TrendingUp className="w-5 h-5" />
                                </div>
                                <span className="text-xs">Reports</span>
                            </button>
                            <button className="p-4 rounded-xl bg-rose-50 text-rose-700 font-bold hover:bg-rose-100 transition-all duration-200 flex flex-col items-center justify-center space-y-3 group active:scale-95 h-full">
                                <div className="p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
                                    <Settings className="w-5 h-5" />
                                </div>
                                <span className="text-xs">Settings</span>
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Dashboard;
