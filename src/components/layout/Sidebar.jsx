import { NavLink } from 'react-router-dom';
import {
    LayoutDashboard,
    Users,
    ShoppingCart,
    TrendingUp,
    DollarSign,
    ChevronLeft,
    ChevronRight,
    X
} from 'lucide-react';

const Sidebar = ({ isCollapsed, setIsCollapsed, isMobileOpen, setIsMobileOpen }) => {
    const menuItems = [
        { name: 'Dashboard', icon: LayoutDashboard, path: '/' },
        { name: 'Users', icon: Users, path: '/users' },
        { name: 'Orders', icon: ShoppingCart, path: '/orders' },
        { name: 'Sales', icon: TrendingUp, path: '/sales' },
        { name: 'Revenue', icon: DollarSign, path: '/revenue' },
    ];

    const closeMobileMenu = () => {
        if (window.innerWidth < 768) {
            setIsMobileOpen(false);
        }
    };

    return (
        <>
            {/* Mobile Overlay */}
            {isMobileOpen && (
                <div
                    className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60] md:hidden transition-opacity duration-300"
                    onClick={() => setIsMobileOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`
          fixed left-0 top-0 h-full bg-white dark:bg-[#0b1120] border-r border-slate-200/60 dark:border-slate-800/60
          transition-all duration-300 ease-in-out z-[70] flex flex-col
          ${isCollapsed ? 'md:w-20' : 'md:w-[260px]'}
          ${isMobileOpen ? 'w-[80%] translate-x-0' : 'w-[80%] -translate-x-full md:translate-x-0'}
        `}
            >
                {/* Branding Section */}
                <div className="h-20 flex items-center justify-between px-6">
                    {!isCollapsed && (
                        <div className="flex items-center space-x-2.5">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-md shadow-blue-500/20">
                                <LayoutDashboard className="w-4 h-4 text-white" />
                            </div>
                            <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-slate-100">
                                Dashboard
                            </span>
                        </div>
                    )}

                    {/* Mobile Close Button */}
                    {isMobileOpen && (
                        <button
                            onClick={() => setIsMobileOpen(false)}
                            className="p-2 md:hidden text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    )}

                    {/* Collapse Toggle - Desktop Only */}
                    <button
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className={`hidden md:flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-400 ${isCollapsed ? 'w-10 h-10 mx-auto' : 'w-8 h-8'}`}
                    >
                        {isCollapsed ? (
                            <ChevronRight className="w-5 h-5" />
                        ) : (
                            <ChevronLeft className="w-4 h-4" />
                        )}
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
                    {!isCollapsed && (
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4 px-3">
                            Main Menu
                        </p>
                    )}
                    <div className="space-y-1">
                        {menuItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                onClick={closeMobileMenu}
                                className={({ isActive }) =>
                                    `flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200 group relative
                                    ${isActive
                                        ? 'bg-blue-50/50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 font-medium'
                                        : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/40 hover:text-slate-900 dark:hover:text-slate-200'
                                    }
                                    ${isCollapsed ? 'justify-center px-0' : ''}
                                    `
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        <item.icon className={`w-5 h-5 flex-shrink-0 transition-colors ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400 group-hover:text-slate-600 dark:text-slate-500 dark:group-hover:text-slate-300'}`} />
                                        {!isCollapsed && <span className="text-sm">{item.name}</span>}
                                        {isActive && !isCollapsed && (
                                            <div className="absolute left-0 w-1 h-5 bg-blue-600 dark:bg-blue-500 rounded-r-full" />
                                        )}
                                    </>
                                )}
                            </NavLink>
                        ))}
                    </div>
                </nav>

                {/* Bottom User Section */}
                <div className="p-4 border-t border-slate-100 dark:border-slate-800/60">
                    <div className={`flex items-center rounded-xl p-2 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/40 ${isCollapsed ? 'justify-center' : 'space-x-3'}`}>
                        <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white text-[10px] font-bold shadow-sm">
                            AD
                        </div>
                        {!isCollapsed && (
                            <div className="flex-1 min-w-0">
                                <p className="text-xs font-semibold text-slate-900 dark:text-slate-100 truncate">Admin User</p>
                                <p className="text-[10px] text-slate-400 dark:text-slate-500 truncate">Enterprise Access</p>
                            </div>
                        )}
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
