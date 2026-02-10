// Format currency
export const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(value);
};

// Format number with commas
export const formatNumber = (value) => {
    return new Intl.NumberFormat('en-US').format(value);
};

// Format percentage
export const formatPercentage = (value) => {
    return `${value > 0 ? '+' : ''}${value.toFixed(1)}%`;
};

// Format date
export const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    }).format(new Date(date));
};

// Get status color
// Get status color
export const getStatusColor = (status) => {
    const s = status.toLowerCase();
    const colors = {
        active: 'bg-emerald-100 text-emerald-700 border border-emerald-200',
        inactive: 'bg-slate-100 text-slate-600 border border-slate-200',
        pending: 'bg-amber-50 text-amber-700 border border-amber-200',
        processing: 'bg-blue-50 text-blue-700 border border-blue-200',
        shipped: 'bg-violet-50 text-violet-700 border border-violet-200',
        delivered: 'bg-emerald-100 text-emerald-700 border border-emerald-200',
        cancelled: 'bg-rose-50 text-rose-700 border border-rose-200',
    };
    return colors[s] || colors.inactive;
};

// Generate random number in range
export const randomInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Generate chart data
export const generateChartData = (months = 6) => {
    const data = [];
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const currentMonth = new Date().getMonth();

    for (let i = months - 1; i >= 0; i--) {
        const monthIndex = (currentMonth - i + 12) % 12;
        data.push({
            month: monthNames[monthIndex],
            revenue: randomInRange(15000, 45000),
            sales: randomInRange(200, 800),
        });
    }

    return data;
};
