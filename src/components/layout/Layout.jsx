import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Layout = ({ children }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileOpen]);

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
                className={`transition-all duration-300 md:ml-[260px] ${isCollapsed ? 'md:!ml-20' : ''
                    }`}
            >
                {/* Navbar */}
                <Navbar onMenuClick={() => setIsMobileOpen(!isMobileOpen)} />

                {/* Page Content Wrapper */}
                <main className="w-full px-4 md:px-0 py-6 md:py-8 overflow-x-hidden">
                    <div className="max-w-7xl mx-auto md:px-8 space-y-6 md:space-y-8">
                        {children}
                    </div>
                </main>
            </div>

        </div>
    );
};

export default Layout;
