import { useState } from 'react';
import { Menu, Search, User, Settings, LogOut } from 'lucide-react';

const Navbar = ({ onMenuClick }) => {
    const [showUserMenu, setShowUserMenu] = useState(false);

    return (
        <nav className="h-16 bg-white/80 backdrop-blur-xl border-b border-slate-200/60 sticky top-0 z-40 w-full flex justify-center">
            <div className="w-full max-w-7xl px-4 md:px-8 flex items-center justify-between">
                {/* Left Section */}
                <div className="flex items-center space-x-4">
                    {/* Mobile Menu Button */}
                    <button
                        onClick={onMenuClick}
                        className="md:hidden p-2 -ml-2 rounded-lg hover:bg-slate-100 transition-all active:scale-95 text-slate-600"
                    >
                        <Menu className="w-6 h-6" />
                    </button>

                    {/* Search Bar - Hidden on mobile */}
                    <div className="hidden md:flex items-center bg-slate-100/50 border border-slate-200/60 focus-within:border-blue-500/50 focus-within:ring-4 focus-within:ring-blue-500/5 focus-within:bg-white rounded-xl px-4 py-2 w-72 transition-all duration-300 group">
                        <Search className="w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-transparent border-none outline-none text-sm text-slate-700 w-full placeholder-slate-400 ml-3"
                        />
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex items-center space-x-3">
                    {/* User Profile */}
                    <div className="relative">
                        <button
                            onClick={() => setShowUserMenu(!showUserMenu)}
                            className="flex items-center space-x-2 p-1 rounded-xl hover:bg-slate-100 md:hover:bg-slate-100 transition-all duration-200"
                        >
                            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-md shadow-blue-500/20 active:scale-95 transition-transform overflow-hidden">
                                <User className="w-4 h-4 text-white" />
                            </div>
                            <div className="hidden md:block text-left mr-1">
                                <p className="text-xs font-bold text-slate-800 leading-tight">Admin</p>
                            </div>
                        </button>

                        {/* Dropdown Menu */}
                        {showUserMenu && (
                            <>
                                <div
                                    className="fixed inset-0 z-10"
                                    onClick={() => setShowUserMenu(false)}
                                />
                                <div className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-xl border border-slate-100 p-1.5 z-20 animate-fade-in text-slate-700">
                                    <div className="px-3 py-2 border-b border-slate-50 mb-1">
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">Account</p>
                                        <p className="text-xs font-semibold text-slate-900 truncate">admin@nexus.io</p>
                                    </div>
                                    <a
                                        href="#"
                                        className="flex items-center space-x-2.5 px-3 py-2 text-sm rounded-lg hover:bg-slate-50 transition-all group"
                                    >
                                        <User className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:text-blue-500 transition-all" />
                                        <span className="font-medium">Profile</span>
                                    </a>
                                    <a
                                        href="#"
                                        className="flex items-center space-x-2.5 px-3 py-2 text-sm rounded-lg hover:bg-slate-50 transition-all group"
                                    >
                                        <Settings className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:text-blue-500 transition-all" />
                                        <span className="font-medium">Settings</span>
                                    </a>
                                    <div className="my-1 border-t border-slate-50" />
                                    <a
                                        href="#"
                                        className="flex items-center space-x-2.5 px-3 py-2 text-sm text-red-600 rounded-lg hover:bg-red-50 transition-all group"
                                    >
                                        <LogOut className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
                                        <span className="font-bold">Sign Out</span>
                                    </a>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
