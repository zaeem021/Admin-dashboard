import { DollarSign, CreditCard, PieChart as PieIcon, TrendingUp } from 'lucide-react';
import BarChart from '../components/charts/BarChart';
import Table, { StatusBadge } from '../components/ui/Table';

const RevenuePage = () => {
    // Dummy revenue data
    const revenueData = [
        { name: 'Sep', value: 12500 },
        { name: 'Oct', value: 15200 },
        { name: 'Nov', value: 14800 },
        { name: 'Dec', value: 21100 },
        { name: 'Jan', value: 19900 },
        { name: 'Feb', value: 24200 },
    ];

    const monthlyBreakdown = [
        { month: 'February 2024', gross: '$24,200', net: '$19,840', churn: '2.1%', status: 'Growth' },
        { month: 'January 2024', gross: '$19,900', net: '$16,210', churn: '2.4%', status: 'Stable' },
        { month: 'December 2023', gross: '$21,100', net: '$17,450', churn: '1.8%', status: 'Growth' },
        { month: 'November 2023', gross: '$14,800', net: '$11,900', churn: '3.2%', status: 'Critical' },
    ];

    const columns = [
        { label: 'Month', key: 'month' },
        { label: 'Gross Revenue', key: 'gross' },
        { label: 'Net Profit', key: 'net' },
        { label: 'Churn Rate', key: 'churn' },
        { label: 'Trend', key: 'status', render: (val) => <StatusBadge status={val} /> },
    ];

    return (
        <div className="space-y-8 animate-fade-in pb-8">
            {/* Page Header */}
            <div>
                <h1 className="text-xl md:text-3xl font-black text-slate-900 tracking-tight">Revenue Analysis</h1>
                <p className="text-sm text-slate-500 mt-1">Financial overview and metrics.</p>
            </div>

            {/* Revenue Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm transition-all group md:hover:shadow-md">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-blue-50 rounded-xl text-blue-600 transition-colors md:group-hover:bg-blue-600 md:group-hover:text-white">
                            <DollarSign className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">+18.2%</span>
                    </div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Gross Revenue</p>
                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 mt-1">$142,482</h3>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm transition-all group md:hover:shadow-md">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600 transition-colors md:group-hover:bg-emerald-600 md:group-hover:text-white">
                            <CreditCard className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">+5.4%</span>
                    </div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Avg. Trans.</p>
                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 mt-1">$48.50</h3>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm transition-all group md:hover:shadow-md">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-rose-50 rounded-xl text-rose-600 transition-colors md:group-hover:bg-rose-600 md:group-hover:text-white">
                            <PieIcon className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">-2.1%</span>
                    </div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Churn Rate</p>
                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 mt-1">1.8%</h3>
                </div>
            </div>

            {/* Revenue Chart Section */}
            <section className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col h-auto">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Revenue Analysis</h2>
                        <p className="text-[11px] text-slate-400 mt-0.5">Accumulated revenue vs targets.</p>
                    </div>
                    <button className="flex items-center space-x-2 px-3 py-1.5 border border-slate-200 rounded-xl text-xs font-bold text-slate-600 md:hover:bg-slate-50 transition-all active:scale-95">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Insight</span>
                    </button>
                </div>
                <div className="h-64 md:h-96 w-full">
                    <BarChart data={revenueData} />
                </div>
            </section>

            {/* Financial Ledger Table */}
            <section className="space-y-4">
                <div className="flex items-center justify-between px-1">
                    <h2 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Financial Ledger</h2>
                </div>
                <Table
                    columns={columns}
                    data={monthlyBreakdown}
                    renderMobileRow={(entry) => (
                        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 mb-4 last:mb-0">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-sm font-bold text-slate-900">{entry.month}</span>
                                <StatusBadge status={entry.status} />
                            </div>
                            <div className="grid grid-cols-2 gap-y-3 pt-4 border-t border-slate-50">
                                <div>
                                    <p className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">Gross</p>
                                    <p className="text-xs font-bold text-slate-700">{entry.gross}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">Net Profit</p>
                                    <p className="text-xs font-bold text-emerald-600">{entry.net}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">Churn</p>
                                    <p className="text-xs font-bold text-rose-500">{entry.churn}</p>
                                </div>
                            </div>
                        </div>
                    )}
                />
            </section>
        </div>
    );
};

export default RevenuePage;
