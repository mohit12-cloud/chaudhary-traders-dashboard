import React, { useState } from 'react';
import { 
  ShoppingCart, 
  Plus, 
  Minus, 
  CheckCircle2, 
  Clock, 
  ChevronRight,
  Search,
  Zap
} from 'lucide-react';

const recentSales = [
  { id: 'TRX-9402', product: 'LEGO Star Wars Set', amount: '₹4,999', time: '2 mins ago', status: 'Completed' },
  { id: 'TRX-9401', product: 'Soft Plush Bear', amount: '₹999', time: '15 mins ago', status: 'Completed' },
  { id: 'TRX-9400', product: 'Hot Wheels Track Set', amount: '₹2,199', time: '1 hour ago', status: 'Completed' },
  { id: 'TRX-9399', product: 'Remote Control Drone', amount: '₹8,999', time: '3 hours ago', status: 'Completed' },
  { id: 'TRX-9398', product: 'Barbie Dreamhouse', amount: '₹12,499', time: 'Yesterday', status: 'Completed' },
];

const Sales: React.FC = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="space-y-8 pb-10">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Daily Sales Tracker</h1>
        <p className="text-slate-500 mt-1">Log new sales and track daily performance.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* POS Quick Entry Form */}
        <div className="lg:col-span-1 space-y-6">
          <div className="card border-primary-100 ring-4 ring-primary-500/5">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary-100 text-primary-600 rounded-lg">
                <Zap size={20} />
              </div>
              <h3 className="text-lg font-bold text-slate-800">Quick Sale</h3>
            </div>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Select Product</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <select className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all appearance-none cursor-pointer">
                    <option>Select a toy...</option>
                    <option>LEGO Star Wars Set</option>
                    <option>Barbie Dreamhouse</option>
                    <option>Hot Wheels Track Set</option>
                    <option>Remote Control Drone</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Quantity</label>
                  <div className="flex items-center border border-slate-200 rounded-xl bg-slate-50 overflow-hidden">
                    <button 
                      className="p-3 hover:bg-slate-100 text-slate-500 transition-colors"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      <Minus size={16} />
                    </button>
                    <input 
                      type="number" 
                      className="w-full bg-transparent border-none text-center font-bold text-slate-800 focus:ring-0" 
                      value={quantity}
                      readOnly
                    />
                    <button 
                      className="p-3 hover:bg-slate-100 text-slate-500 transition-colors"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Price (ea.)</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold">₹</span>
                    <input 
                      type="text" 
                      placeholder="0.00" 
                      className="w-full pl-8 pr-4 py-3 bg-slate-100 border border-transparent rounded-xl text-sm font-bold text-slate-800 outline-none"
                      readOnly
                      value="4,999"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-slate-500 font-medium">Grand Total</span>
                  <span className="text-2xl font-bold text-primary-600">₹{(4999 * quantity).toLocaleString()}</span>
                </div>
                <button className="w-full btn-primary py-4 flex items-center justify-center gap-2 text-lg">
                  <ShoppingCart size={20} />
                  <span>Complete Sale</span>
                </button>
              </div>
            </form>
          </div>

          <div className="card bg-gradient-to-br from-secondary-500 to-secondary-600 text-white border-none">
             <h4 className="font-bold text-lg">Daily Goal</h4>
             <p className="text-sm opacity-90 mt-1">₹45,000 / ₹60,000</p>
             <div className="mt-4 h-3 w-full bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-white rounded-full" style={{ width: '75%' }}></div>
             </div>
             <p className="text-xs mt-3 opacity-80 font-medium">You're doing great! Almost there. 🚀</p>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="lg:col-span-2 card">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-slate-800">Recent Transactions</h3>
            <button className="text-primary-500 text-sm font-semibold hover:underline flex items-center gap-1">
              View History <ChevronRight size={14} />
            </button>
          </div>

          <div className="space-y-2">
            {recentSales.map((sale, i) => (
              <div key={i} className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-2xl transition-all border border-transparent hover:border-slate-100 group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center group-hover:bg-green-100 transition-colors">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">{sale.product}</h4>
                    <p className="text-xs text-slate-500 flex items-center gap-1">
                      <Clock size={12} /> {sale.time} • ID: {sale.id}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-slate-800">{sale.amount}</p>
                  <p className="text-[10px] font-bold text-accent-green uppercase tracking-wider">{sale.status}</p>
                </div>
              </div>
            ))}
          </div>
          
          <button className="w-full mt-6 py-3 border-2 border-dashed border-slate-200 text-slate-400 rounded-2xl text-sm font-bold hover:bg-slate-50 hover:border-slate-300 hover:text-slate-500 transition-all">
            Load More Transactions
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sales;
