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
        <div className="space-y-6 pb-8">
            <div className="space-y-1">
                <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">Orders</h1>
                <p className="text-sm text-slate-500">Track recent customer transactions.</p>
            </div>
            <Table
                columns={columns}
                data={orders}
                renderMobileRow={(order) => (
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                        <div className="mb-2">
                            <h3 className="text-sm font-bold text-slate-900 line-clamp-2 leading-tight">
                                {order.product}
                            </h3>
                            <span className="text-xs font-mono text-slate-400 mt-1 block">#{order.orderId}</span>
                        </div>
                        <div className="flex items-center justify-between border-t border-slate-50 pt-3 mt-3">
                            <span className="text-sm font-black text-slate-800">{formatCurrency(order.price)}</span>
                            <StatusBadge status={order.status} />
                        </div>
                    </div>
                )}
            />
        </div>
    );
};

export default OrdersPage;
