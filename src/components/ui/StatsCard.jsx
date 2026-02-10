import { formatNumber } from '../../utils/helpers';

const StatsCard = ({ icon: Icon, title, value, change, iconBgColor = 'bg-blue-600' }) => {
    const isPositive = change >= 0;

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 md:p-6 md:hover:shadow-lg transition-all duration-300 group cursor-pointer w-full active:scale-95 md:active:scale-100">
            <div className="flex flex-row items-center justify-between">
                <div className="space-y-3">
                    <div className="space-y-1">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                            {title}
                        </p>
                        <h3 className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight">
                            {typeof value === 'number' ? formatNumber(value) : value}
                        </h3>
                    </div>

                    <div className="flex items-center space-x-2">
                        <div className={`flex items-center px-2 py-0.5 rounded-md text-[11px] font-bold ${isPositive
                            ? 'bg-emerald-50 text-emerald-600'
                            : 'bg-rose-50 text-rose-600'
                            }`}>
                            {isPositive ? '+' : ''}{change}%
                        </div>
                        <span className="text-xs font-medium text-slate-400">
                            vs last month
                        </span>
                    </div>
                </div>

                <div className={`p-3 md:p-4 rounded-xl ${iconBgColor} bg-opacity-10 md:group-hover:scale-105 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 md:w-7 md:h-7 ${iconBgColor.replace('bg-', 'text-')}`} />
                </div>
            </div>
        </div>
    );
};

export default StatsCard;
