import { useState, useEffect } from 'react';
import Table, { StatusBadge } from '../components/ui/Table';
import LoadingSkeleton from '../components/ui/LoadingSkeleton';
import ErrorState from '../components/ui/ErrorState';
import { fetchUsers } from '../services/api';
import { formatDate } from '../utils/helpers';

const UsersPage = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        try {
            setLoading(true);
            const data = await fetchUsers();
            setUsers(data);
            setError(null);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const columns = [
        { label: 'Name', key: 'name' },
        { label: 'Email', key: 'email' },
        {
            label: 'Status',
            key: 'status',
            render: (value) => <StatusBadge status={value} />,
        },
        {
            label: 'Joined Date',
            key: 'joinedDate',
            render: (value) => formatDate(value),
        },
    ];

    if (loading) return <LoadingSkeleton type="table" />;
    if (error) return <ErrorState onRetry={loadUsers} />;

    return (
        <div className="space-y-6 pb-8">
            {/* Page Header */}
            <div>
                <h1 className="text-xl md:text-3xl font-black text-slate-900 tracking-tight">Users</h1>
                <p className="text-sm text-slate-500 mt-1">Manage your system members.</p>
            </div>
            <Table
                columns={columns}
                data={users}
                renderMobileRow={(user) => (
                    <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 active:bg-slate-50 transition-colors mb-4 last:mb-0">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex flex-col">
                                <span className="text-sm font-bold text-slate-900">{user.name}</span>
                                <span className="text-xs text-slate-400 mt-0.5">{user.email}</span>
                            </div>
                            <StatusBadge status={user.status} />
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                            <span className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">Joined Date</span>
                            <span className="text-xs font-semibold text-slate-600">{formatDate(user.joinedDate)}</span>
                        </div>
                    </div>
                )}
            />
        </div>
    );
};

export default UsersPage;
