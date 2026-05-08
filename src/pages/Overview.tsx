import React from 'react';
import { 
  TrendingUp, 
  Package, 
  AlertTriangle, 
  Users, 
  ArrowUpRight, 
  ArrowDownRight,
  MoreVertical
} from 'lucide-react';
import { 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';

const data = [
  { name: 'Mon', sales: 4000 },
  { name: 'Tue', sales: 3000 },
  { name: 'Wed', sales: 5000 },
  { name: 'Thu', sales: 2780 },
  { name: 'Fri', sales: 6890 },
  { name: 'Sat', sales: 8390 },
  { name: 'Sun', sales: 7490 },
];

const stats = [
  { 
    title: 'Total Revenue', 
    value: '₹1,24,500', 
    change: '+12.5%', 
    isPositive: true, 
    icon: TrendingUp, 
    color: 'text-primary-500',
    bg: 'bg-primary-50'
  },
  { 
    title: 'Products in Stock', 
    value: '842', 
    change: '+3 today', 
    isPositive: true, 
    icon: Package, 
    color: 'text-secondary-500',
    bg: 'bg-secondary-50'
  },
  { 
    title: 'Low Stock Alerts', 
    value: '12', 
    change: '-2 from yesterday', 
    isPositive: true, 
    icon: AlertTriangle, 
    color: 'text-accent-yellow',
    bg: 'bg-amber-50'
  },
  { 
    title: 'Active Staff', 
    value: '8 / 10', 
    change: 'On time', 
    isPositive: true, 
    icon: Users, 
    color: 'text-accent-purple',
    bg: 'bg-purple-50'
  },
];

const Overview: React.FC = () => {
  return (
    <div className="space-y-8 pb-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 font-sans tracking-tight">Dashboard Overview</h1>
          <p className="text-slate-500 mt-1">Grow your toy business with data-driven insights.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-xl text-sm font-semibold text-slate-600">
            <span>Last 7 Days</span>
          </div>
          <button className="btn-primary flex items-center gap-2">
            <TrendingUp size={18} />
            <span>Generate Report</span>
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="card group">
            <div className="flex items-start justify-between">
              <div className={`p-3 rounded-xl ${stat.bg} ${stat.color} transition-colors group-hover:bg-opacity-80`}>
                <stat.icon size={24} />
              </div>
              <div className={`flex items-center gap-1 text-xs font-bold ${stat.isPositive ? 'text-accent-green' : 'text-red-500'}`}>
                {stat.isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                {stat.change}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">{stat.title}</p>
              <h3 className="text-2xl font-bold text-slate-800 mt-1">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Charts & Secondary Info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart */}
        <div className="lg:col-span-2 card overflow-hidden">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-800">Daily Sales Trends</h3>
              <p className="text-sm text-slate-500">Visualization of revenue generated this week</p>
            </div>
            <button className="p-2 hover:bg-slate-50 rounded-lg text-slate-400">
              <MoreVertical size={20} />
            </button>
          </div>
          
          <div className="h-[350px] w-full mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ec4899" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#ec4899" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#94a3b8', fontSize: 12}}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#94a3b8', fontSize: 12}}
                  tickFormatter={(value) => `₹${value}`}
                />
                <Tooltip 
                  contentStyle={{ 
                    borderRadius: '16px', 
                    border: 'none', 
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                    padding: '12px'
                  }}
                  itemStyle={{ color: '#ec4899', fontWeight: 'bold' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="sales" 
                  stroke="#ec4899" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorSales)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="card">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-slate-800">Top Categories</h3>
            <button className="text-primary-500 text-sm font-semibold hover:underline">See all</button>
          </div>
          
          <div className="space-y-6">
            {[
              { name: 'Action Figures', value: 85, color: 'bg-primary-500' },
              { name: 'Educational Toys', value: 62, color: 'bg-secondary-500' },
              { name: 'Board Games', value: 45, color: 'bg-accent-yellow' },
              { name: 'Outdoor Play', value: 30, color: 'bg-accent-purple' },
            ].map((cat, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-semibold text-slate-700">{cat.name}</span>
                  <span className="text-slate-500">{cat.value}%</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className={`h-full ${cat.color} rounded-full`} style={{ width: `${cat.value}%` }}></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-5 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl text-white relative overflow-hidden">
             <div className="relative z-10">
               <h4 className="font-bold">Inventory Low!</h4>
               <p className="text-sm opacity-90 mt-1">5 categories need restocking soon.</p>
               <button className="mt-4 bg-white text-primary-600 px-4 py-2 rounded-xl text-xs font-bold hover:bg-opacity-90 transition-all">
                 Restock Now
               </button>
             </div>
             <Package className="absolute -right-4 -bottom-4 opacity-20 rotate-12" size={100} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
