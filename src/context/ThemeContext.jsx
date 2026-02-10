import { createContext, useContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
};

export const ThemeProvider = ({ children }) => {
    // Force light mode
    const isDark = false;
    const toggleTheme = () => { }; // No-op

    // Ensure dark class is removed from document
    if (typeof window !== 'undefined') {
        document.documentElement.classList.remove('dark');
        localStorage.removeItem('theme');
    }

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
