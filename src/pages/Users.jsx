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
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-5 md:p-8 animate-fade-in mb-8">
            <div className="space-y-6 md:space-y-8">
                {/* Page Header */}
                <div className="border-b border-slate-100 pb-6">
                    <h1 className="text-xl md:text-3xl font-black text-slate-900 tracking-tight">Users</h1>
                    <p className="text-sm text-slate-500 mt-1">Manage your system members.</p>
                </div>

                <Table
                    columns={columns}
                    data={users}
                    renderMobileRow={(user) => (
                        <div className="bg-slate-50/50 p-5 rounded-2xl border border-slate-100 active:bg-slate-100 transition-colors mb-4 last:mb-0">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex flex-col">
                                    <span className="text-sm font-bold text-slate-900">{user.name}</span>
                                    <span className="text-xs text-slate-400 mt-0.5">{user.email}</span>
                                </div>
                                <StatusBadge status={user.status} />
                            </div>
                            <div className="flex items-center justify-between pt-4 border-t border-slate-200/60">
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Joined Date</span>
                                <span className="text-xs font-semibold text-slate-600">{formatDate(user.joinedDate)}</span>
                            </div>
                        </div>
                    )}
                />
            </div>
        </div>
    );
};

export default UsersPage;
