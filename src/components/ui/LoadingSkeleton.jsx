const LoadingSkeleton = ({ type = 'card', count = 1 }) => {
    if (type === 'stats') {
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {[...Array(4)].map((_, i) => (
                    <div
                        key={i}
                        className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 animate-pulse"
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex-1 space-y-3">
                                <div className="h-4 bg-slate-100 rounded w-20"></div>
                                <div className="h-8 bg-slate-100 rounded w-32"></div>
                                <div className="h-3 bg-slate-100 rounded w-16"></div>
                            </div>
                            <div className="w-12 h-12 bg-slate-100 rounded-xl"></div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    if (type === 'chart') {
        return (
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 animate-pulse w-full">
                <div className="h-4 bg-slate-100 rounded w-32 mb-8"></div>
                <div className="h-48 md:h-64 bg-slate-100 rounded-xl w-full"></div>
            </div>
        );
    }

    if (type === 'table') {
        return (
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 animate-pulse w-full">
                <div className="space-y-4">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="h-16 bg-slate-100 rounded-xl w-full"></div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 animate-pulse w-full">
            <div className="h-32 bg-slate-100 rounded-xl w-full"></div>
        </div>
    );
};

export default LoadingSkeleton;
