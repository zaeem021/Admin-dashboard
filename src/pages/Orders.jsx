import { useState, useEffect } from 'react';
import Table, { StatusBadge } from '../components/ui/Table';
import LoadingSkeleton from '../components/ui/LoadingSkeleton';
import ErrorState from '../components/ui/ErrorState';
import { fetchProducts } from '../services/api';
import { formatCurrency } from '../utils/helpers';

const OrdersPage = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadOrders();
    }, []);

    const loadOrders = async () => {
        try {
            setLoading(true);
            const data = await fetchProducts();
            setOrders(data);
            setError(null);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const columns = [
        { label: 'Order ID', key: 'orderId' },
        {
            label: 'Product',
            key: 'product',
            render: (value) => <span className="max-w-xs block truncate font-medium text-slate-700">{value}</span>
        },
        {
            label: 'Price',
            key: 'price',
            render: (value) => formatCurrency(value),
        },
        {
            label: 'Status',
            key: 'status',
            render: (value) => <StatusBadge status={value} />,
        },
    ];

    if (loading) return <LoadingSkeleton type="table" />;
    if (error) return <ErrorState onRetry={loadOrders} />;

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-5 md:p-8 animate-fade-in mb-8">
            <div className="space-y-6 md:space-y-8">
                {/* Page Header */}
                <div className="border-b border-slate-100 pb-6">
                    <h1 className="text-xl md:text-3xl font-black text-slate-900 tracking-tight">Orders</h1>
                    <p className="text-sm text-slate-500 mt-1">Track recent customer transactions.</p>
                </div>

                <Table
                    columns={columns}
                    data={orders}
                    renderMobileRow={(order) => (
                        <div className="bg-slate-50/50 p-5 rounded-2xl border border-slate-100 active:bg-slate-100 transition-colors mb-4 last:mb-0">
                            <div className="flex justify-between items-start mb-4">
                                <div className="space-y-1">
                                    <h3 className="text-sm font-bold text-slate-900 leading-tight">
                                        {order.product}
                                    </h3>
                                    <span className="text-[10px] font-mono text-slate-400 block tracking-tight">#{order.orderId}</span>
                                </div>
                                <StatusBadge status={order.status} />
                            </div>
                            <div className="flex items-center justify-between pt-4 border-t border-slate-200/60">
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Amount</span>
                                <span className="text-sm font-black text-slate-900">{formatCurrency(order.price)}</span>
                            </div>
                        </div>
                    )}
                />
            </div>
        </div>
    );
};

export default OrdersPage;
