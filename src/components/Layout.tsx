import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { Menu, Search, Bell } from 'lucide-react';
import logoImg from '../assets/logo.jpg';

const Layout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex relative overflow-hidden">
      {/* Full Screen Logo Background */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${logoImg})` }}
      />
      {/* Dark Overlay for Readability */}
      <div className="fixed inset-0 z-0 bg-slate-900/60 backdrop-blur-[2px]" />

      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      
      <div className="flex-1 flex flex-col lg:pl-72 relative z-10">
        {/* Header */}
        <header className="h-20 bg-white/10 backdrop-blur-xl border-b border-white/10 sticky top-0 z-30 px-6 lg:px-10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu size={24} />
            </button>
            
            <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/10 rounded-xl focus-within:ring-2 focus-within:ring-primary-500/20 focus-within:border-primary-500 transition-all w-80">
              <Search size={18} className="text-white/40" />
              <input 
                type="text" 
                placeholder="Search products, orders..." 
                className="bg-transparent border-none outline-none text-sm w-full text-white placeholder:text-white/40"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 lg:gap-6">
            <button className="relative p-2 text-white/70 hover:bg-white/10 rounded-xl transition-colors">
              <Bell size={22} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-primary-500 rounded-full border-2 border-slate-900"></span>
            </button>
            <div className="h-10 w-px bg-white/10 hidden sm:block"></div>
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-white">Mohit C.</p>
                <p className="text-[10px] font-bold text-primary-400 uppercase tracking-tighter">Administrator</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-500 to-primary-400 flex items-center justify-center text-white font-bold shadow-lg shadow-primary-500/20">
                MC
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 p-6 lg:p-10">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
