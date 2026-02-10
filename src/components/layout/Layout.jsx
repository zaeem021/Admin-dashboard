import { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Layout = ({ children }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <div className="min-h-screen bg-slate-50 transition-all overflow-x-hidden">
            {/* Sidebar */}
            <Sidebar
                isCollapsed={isCollapsed}
                setIsCollapsed={setIsCollapsed}
                isMobileOpen={isMobileOpen}
                setIsMobileOpen={setIsMobileOpen}
            />

            {/* Main Content */}
            <div
                className={`transition-all duration-300 ${isCollapsed ? 'md:ml-20' : 'md:ml-[260px]'
                    }`}
            >
                {/* Navbar */}
                <Navbar onMenuClick={() => setIsMobileOpen(!isMobileOpen)} />

                {/* Page Content Wrapper */}
                <div className="flex justify-center w-full">
                    <main className="w-full max-w-7xl p-4 md:p-8 space-y-6 md:space-y-8">
                        {children}
                    </main>
                </div>
            </div>

        </div>
    );
};

export default Layout;
