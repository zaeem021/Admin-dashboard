import {
    BarChart as RechartsBarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Cell,
} from 'recharts';

const BarChart = ({ data, title }) => {
    const gridColor = '#e5e7eb';
    const textColor = '#6b7280';
    const primaryColor = '#3b82f6';
    const accentColor = '#8b5cf6';

    return (
        <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-64 md:h-[400px] w-full min-w-0 overflow-hidden">
            {title && (
                <h3 className="text-xs md:text-sm font-bold uppercase tracking-widest text-slate-400 mb-4 md:mb-6">
                    {title}
                </h3>
            )}
            <div className="flex-1 w-full min-h-0 min-w-0">
                <ResponsiveContainer width="100%" height="100%">
                    <RechartsBarChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke={gridColor} vertical={false} />
                        <XAxis
                            dataKey="month"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: textColor, fontSize: 10 }}
                            dy={10}
                            interval="preserveStartEnd"
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: textColor, fontSize: 10 }}
                        />
                        <Tooltip
                            cursor={{ fill: '#f8fafc', opacity: 0.8 }}
                            contentStyle={{
                                backgroundColor: '#ffffff',
                                borderColor: '#e2e8f0',
                                color: '#1e293b',
                                borderRadius: '12px',
                                fontSize: '12px',
                                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                                padding: '8px 12px',
                            }}
                            itemStyle={{ color: '#1e293b' }}
                        />
                        <Bar
                            dataKey="sales"
                            fill={primaryColor}
                            radius={[4, 4, 0, 0]}
                            barSize={undefined}
                            maxBarSize={40}
                            animationDuration={1000}
                        >
                            {data.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={index === data.length - 1 ? accentColor : primaryColor}
                                />
                            ))}
                        </Bar>
                    </RechartsBarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default BarChart;
