import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  Settings, 
  X,
  LogOut
} from 'lucide-react';
import logoImg from '../assets/logo.jpg';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const navItems = [
    { name: 'Overview', icon: LayoutDashboard, path: '/' },
    { name: 'Inventory', icon: Package, path: '/inventory' },
    { name: 'Sales Tracker', icon: ShoppingCart, path: '/sales' },
    { name: 'Staff Management', icon: Users, path: '/staff' },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 bottom-0 z-50 w-72 bg-white border-r border-slate-100 transition-transform duration-300 lg:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col h-full">
          {/* Logo Section */}
          <div className="p-6 flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg shadow-primary-500/20 border border-slate-100 bg-white">
              <img src={logoImg} alt="Chaudhary Traders Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="font-bold text-lg text-slate-800 leading-tight">Chaudhary</h1>
              <p className="text-xs font-semibold text-primary-500 tracking-wider uppercase">Traders</p>
            </div>
            <button 
              className="ml-auto lg:hidden text-slate-400 hover:text-slate-600"
              onClick={() => setIsOpen(false)}
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                <item.icon size={20} />
                <span className="font-medium">{item.name}</span>
              </NavLink>
            ))}
          </nav>

          {/* Footer Section */}
          <div className="p-4 mt-auto">
            <div className="bg-slate-50 rounded-2xl p-4 mb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-accent-yellow flex items-center justify-center text-white font-bold text-sm">
                  MT
                </div>
                <div className="overflow-hidden">
                  <p className="text-sm font-semibold text-slate-800 truncate">Mohit Chaudhary</p>
                  <p className="text-xs text-slate-500 truncate">Owner</p>
                </div>
              </div>
              <button className="flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-primary-600 transition-colors">
                <Settings size={14} />
                <span>Account Settings</span>
              </button>
            </div>
            <button className="w-full flex items-center justify-center gap-2 px-4 py-3 text-slate-500 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all duration-300">
              <LogOut size={20} />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
