import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { tools } from '../data/tools';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  const categories = Array.from(new Set(tools.map(t => t.category)));

  // Initial Dark Mode Check
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  const NavLink = ({ to, label }: { to: string; label: string }) => {
    const isActive = location.pathname === to;
    return (
      <Link 
        to={to} 
        className={`px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200 ${
          isActive 
            ? 'border-brand-500 text-gray-900 dark:text-white' 
            : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:border-gray-300'
        }`}
      >
        {label}
      </Link>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-gray-200 dark:border-slate-800 shadow-sm transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex-shrink-0 flex items-center group">
                <i className="fas fa-layer-group text-brand-600 dark:text-brand-500 text-2xl mr-2 group-hover:scale-110 transition-transform"></i>
                <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">Omni<span className="text-brand-600 dark:text-brand-500">Tools</span></span>
              </Link>
              
              {/* Desktop Nav */}
              <div className="hidden sm:ml-10 sm:flex sm:space-x-8">
                <NavLink to="/" label="Home" />
                <NavLink to="/tools" label="All Tools" />
                <NavLink to="/about" label="About" />
                <NavLink to="/contact" label="Contact" />
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Theme Toggle */}
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors focus:outline-none"
                aria-label="Toggle Dark Mode"
              >
                {isDark ? <i className="fas fa-sun text-yellow-400"></i> : <i className="fas fa-moon text-slate-600"></i>}
              </button>

              {/* Mobile menu button */}
              <div className="flex items-center sm:hidden">
                <button 
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-white dark:bg-slate-900 border-t dark:border-slate-800 shadow-lg">
            <div className="pt-2 pb-3 space-y-1">
              <Link to="/" className="block pl-3 pr-4 py-2 border-l-4 border-brand-500 text-base font-medium text-brand-700 dark:text-brand-400 bg-brand-50 dark:bg-slate-800" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link to="/tools" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800 hover:border-gray-300" onClick={() => setMobileMenuOpen(false)}>All Tools</Link>
              <Link to="/about" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800 hover:border-gray-300" onClick={() => setMobileMenuOpen(false)}>About</Link>
              <Link to="/contact" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800 hover:border-gray-300" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-white mt-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Tools</h3>
              <ul className="mt-4 space-y-4">
                {categories.slice(0, 4).map(c => (
                  <li key={c}><Link to="/tools" className="text-base text-gray-300 hover:text-white transition-colors">{c}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
              <ul className="mt-4 space-y-4">
                <li><Link to="/privacy" className="text-base text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-base text-gray-300 hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link to="/disclaimer" className="text-base text-gray-300 hover:text-white transition-colors">Disclaimer</Link></li>
              </ul>
            </div>
            <div className="col-span-2">
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">About OmniTools</h3>
              <p className="mt-4 text-base text-gray-300 leading-relaxed">
                OmniTools is a free, comprehensive suite of online utilities for developers, writers, and students. 
                Our tools are designed to be fast, secure, and easy to use.
              </p>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 md:flex md:items-center md:justify-between">
            <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
              &copy; {new Date().getFullYear()} OmniTools Pro. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};