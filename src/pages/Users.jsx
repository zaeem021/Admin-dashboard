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
            <div className="space-y-1">
                <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">Users</h1>
                <p className="text-sm text-slate-500">Manage your system members.</p>
            </div>
            <Table
                columns={columns}
                data={users}
                renderMobileRow={(user) => (
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 relative">
                        <div className="flex flex-col space-y-1 mb-3">
                            <span className="text-base font-bold text-slate-900">{user.name}</span>
                            <span className="text-sm text-slate-500">{user.email}</span>
                        </div>
                        <div className="flex items-center justify-between border-t border-slate-50 pt-3">
                            <StatusBadge status={user.status} />
                            <span className="text-xs font-semibold text-slate-400">{formatDate(user.joinedDate)}</span>
                        </div>
                    </div>
                )}
            />
        </div>
    );
};

export default UsersPage;
