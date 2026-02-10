import { TrendingUp, ShoppingBag, Target, Users, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import LineChart from '../components/charts/LineChart';
import Table, { StatusBadge } from '../components/ui/Table';

const SalesPage = () => {
    // Dummy sales data
    const salesData = [
        { name: 'Sep', value: 4500 },
        { name: 'Oct', value: 5200 },
        { name: 'Nov', value: 4800 },
        { name: 'Dec', value: 6100 },
        { name: 'Jan', value: 5900 },
        { name: 'Feb', value: 7200 },
    ];

    const topProductsData = [
        { product: 'Wireless Auris Pods', sales: 452, growth: '+12.5%', status: 'Best Seller' },
        { product: 'Smart Watch Series 5', sales: 384, growth: '+8.2%', status: 'Trending' },
        { product: 'Mechanical Keyboard', sales: 295, growth: '-2.4%', status: 'Stable' },
        { product: 'Leather Desktop Mat', sales: 184, growth: '+15.1%', status: 'Critical' },
    ];

    const columns = [
        { label: 'Product Name', key: 'product' },
        { label: 'Total Units', key: 'sales' },
        {
            label: 'Trend', key: 'growth', render: (val) => (
                <span className={val.startsWith('+') ? 'text-emerald-600' : 'text-rose-600'}>{val}</span>
            )
        },
        { label: 'Performance', key: 'status', render: (val) => <StatusBadge status={val} /> },
    ];

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-5 md:p-8 animate-fade-in mb-8">
            <div className="space-y-8">
                {/* Page Header */}
                <div className="border-b border-slate-100 pb-6 md:pb-8">
                    <h1 className="text-xl md:text-3xl font-black text-slate-900 tracking-tight">Sales Analysis</h1>
                    <p className="text-sm text-slate-500 mt-1">Deep dive into sales performance.</p>
                </div>

                {/* Sales Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    <div className="bg-slate-50/50 p-6 rounded-2xl border border-slate-100 flex items-center space-x-5 transition-all">
                        <div className="p-3 bg-blue-100/50 rounded-xl text-blue-600">
                            <ShoppingBag className="w-6 h-6 md:w-8 md:h-8" />
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total Sales</p>
                            <h3 className="text-2xl md:text-3xl font-black text-slate-900 mt-0.5">12,482</h3>
                            <p className="text-[10px] text-emerald-600 font-bold flex items-center mt-0.5">
                                <ArrowUpRight className="w-3 h-3 mr-1" /> +14.2%
                            </p>
                        </div>
                    </div>

                    <div className="bg-slate-50/50 p-6 rounded-2xl border border-slate-100 flex items-center space-x-5 transition-all">
                        <div className="p-3 bg-emerald-100/50 rounded-xl text-emerald-600">
                            <Target className="w-6 h-6 md:w-8 md:h-8" />
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Conversion</p>
                            <h3 className="text-2xl md:text-3xl font-black text-slate-900 mt-0.5">3.24%</h3>
                            <p className="text-[10px] text-rose-500 font-bold flex items-center mt-0.5">
                                <ArrowDownRight className="w-3 h-3 mr-1" /> -0.8%
                            </p>
                        </div>
                    </div>

                    <div className="bg-slate-50/50 p-6 rounded-2xl border border-slate-100 flex items-center space-x-5 transition-all">
                        <div className="p-3 bg-purple-100/50 rounded-xl text-purple-600">
                            <Users className="w-6 h-6 md:w-8 md:h-8" />
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">New Customers</p>
                            <h3 className="text-2xl md:text-3xl font-black text-slate-900 mt-0.5">842</h3>
                            <p className="text-[10px] text-emerald-600 font-bold flex items-center mt-0.5">
                                <ArrowUpRight className="w-3 h-3 mr-1" /> +21.4%
                            </p>
                        </div>
                    </div>
                </div>

                {/* Sales Chart Section */}
                <section className="bg-slate-50/50 p-6 md:p-8 rounded-2xl border border-slate-100">
                    <div className="flex items-center justify-between mb-6 md:mb-8">
                        <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Monthly Volume</h2>
                        <div className="flex space-x-1">
                            <button className="px-3 py-1 text-[10px] font-bold bg-blue-600 text-white rounded-lg shadow-sm">Units</button>
                            <button className="px-3 py-1 text-[10px] font-bold text-slate-400 hover:bg-white rounded-lg transition-colors">Orders</button>
                        </div>
                    </div>
                    <div className="h-64 md:h-96 w-full">
                        <LineChart data={salesData} />
                    </div>
                </section>

                {/* Top Products Table */}
                <section className="space-y-4">
                    <h2 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] px-1">Top Performing Products</h2>
                    <Table
                        columns={columns}
                        data={topProductsData}
                        renderMobileRow={(item) => (
                            <div className="bg-slate-50/50 p-5 rounded-2xl border border-slate-100 mb-4 last:mb-0">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="space-y-1">
                                        <h3 className="text-sm font-bold text-slate-900 leading-tight">
                                            {item.product}
                                        </h3>
                                        <div className="flex items-center space-x-2">
                                            <span className="text-[10px] font-bold text-slate-400">{item.sales} units</span>
                                            <span className={`text-[10px] font-bold ${item.growth.startsWith('+') ? 'text-emerald-600' : 'text-rose-600'}`}>{item.growth}</span>
                                        </div>
                                    </div>
                                    <StatusBadge status={item.status} />
                                </div>
                            </div>
                        )}
                    />
                </section>
            </div>
        </div>
    );
};

export default SalesPage;
