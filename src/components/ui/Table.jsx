import { getStatusColor } from '../../utils/helpers';

const Table = ({ columns, data, loading, renderMobileRow }) => {
    if (loading) {
        return (
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="animate-pulse p-6 space-y-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="h-12 bg-slate-50 rounded-xl"></div>
                    ))}
                </div>
            </div>
        );
    }

    if (!data || data.length === 0) {
        return (
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-12 text-center">
                <p className="text-slate-500 font-medium">No data available</p>
            </div>
        );
    }

    return (
        <div className="w-full">
            {/* Desktop Table View (md+) */}
            <div className="hidden md:block bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[800px] border-collapse text-left">
                        <thead>
                            <tr className="bg-slate-50/80 border-b border-slate-200">
                                {columns.map((column) => (
                                    <th
                                        key={column.key}
                                        className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider"
                                    >
                                        {column.label}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {data.map((row, rowIndex) => (
                                <tr
                                    key={rowIndex}
                                    className="hover:bg-slate-50/50 transition-colors duration-200"
                                >
                                    {columns.map((column) => (
                                        <td
                                            key={column.key}
                                            className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-700"
                                        >
                                            {column.render
                                                ? column.render(row[column.key], row)
                                                : row[column.key]}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Mobile Card View (default) */}
            <div className="md:hidden space-y-4">
                {data.map((row, rowIndex) => (
                    renderMobileRow ? (
                        <div key={rowIndex}>{renderMobileRow(row)}</div>
                    ) : (
                        <div
                            key={rowIndex}
                            className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 space-y-3"
                        >
                            {columns.map((column) => (
                                <div key={column.key} className="flex justify-between items-center text-sm">
                                    <span className="font-bold text-slate-400 text-xs uppercase tracking-wide">
                                        {column.label}
                                    </span>
                                    <span className="font-semibold text-slate-900 text-right ml-4">
                                        {column.render
                                            ? column.render(row[column.key], row)
                                            : row[column.key]}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )
                ))}
            </div>
        </div>
    );
};

// Status Badge Component
export const StatusBadge = ({ status }) => {
    return (
        <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold capitalize ${getStatusColor(
                status
            )}`}
        >
            {status}
        </span>
    );
};

export default Table;
