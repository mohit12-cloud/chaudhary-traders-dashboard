import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  Download, 
  Edit2, 
  Trash2, 
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const products = [
  { id: 1, name: 'LEGO Star Wars Set', category: 'Building Sets', sku: 'LSW-001', price: '₹4,999', stock: 42, status: 'In Stock', image: 'https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?w=100&h=100&fit=crop' },
  { id: 2, name: 'Barbie Dreamhouse', category: 'Dolls', sku: 'BDH-202', price: '₹12,499', stock: 8, status: 'Low Stock', image: 'https://images.unsplash.com/photo-1559564484-e484c204058a?w=100&h=100&fit=crop' },
  { id: 3, name: 'Hot Wheels Track Set', category: 'Vehicles', sku: 'HWT-55', price: '₹2,199', stock: 115, status: 'In Stock', image: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=100&h=100&fit=crop' },
  { id: 4, name: 'Remote Control Drone', category: 'Tech Toys', sku: 'RCD-99', price: '₹8,999', stock: 0, status: 'Out of Stock', image: 'https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=100&h=100&fit=crop' },
  { id: 5, name: 'Soft Plush Bear', category: 'Soft Toys', sku: 'SPB-10', price: '₹999', stock: 64, status: 'In Stock', image: 'https://images.unsplash.com/photo-1559440666-374213619973?w=100&h=100&fit=crop' },
  { id: 6, name: 'STEM Robotics Kit', category: 'Educational', sku: 'SRK-404', price: '₹6,499', stock: 15, status: 'In Stock', image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=100&h=100&fit=crop' },
  { id: 7, name: 'Wooden Kitchen Set', category: 'Roleplay', sku: 'WKS-77', price: '₹3,599', stock: 5, status: 'Low Stock', image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=100&h=100&fit=crop' },
];

const Inventory: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-8 pb-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Product Inventory</h1>
          <p className="text-slate-500 mt-1">Manage and track your toy collection stock levels.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-xl text-sm font-semibold hover:bg-slate-50 transition-colors flex items-center gap-2">
            <Download size={18} />
            <span>Export CSV</span>
          </button>
          <button className="btn-primary flex items-center gap-2">
            <Plus size={18} />
            <span>Add Product</span>
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="card !p-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search by name, category or SKU..." 
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors">
            <Filter size={18} />
            <span>Filters</span>
          </button>
          <select className="flex-1 md:flex-none px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-600 outline-none focus:ring-2 focus:ring-primary-500/20 transition-all cursor-pointer">
            <option>All Categories</option>
            <option>Building Sets</option>
            <option>Dolls</option>
            <option>Vehicles</option>
            <option>Educational</option>
          </select>
        </div>
      </div>

      {/* Table Section */}
      <div className="card !p-0 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50">
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Product</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">SKU</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Stock</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-slate-50/80 transition-colors group">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <img src={product.image} alt={product.name} className="w-10 h-10 rounded-lg object-cover bg-slate-100" />
                      <span className="font-bold text-slate-800">{product.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{product.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-slate-500">{product.sku}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-slate-800">{product.price}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${
                            product.stock > 20 ? 'bg-accent-green' : product.stock > 0 ? 'bg-accent-yellow' : 'bg-red-500'
                          }`} 
                          style={{ width: `${Math.min(product.stock, 100)}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-slate-600">{product.stock}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      product.status === 'In Stock' ? 'bg-green-50 text-green-600' :
                      product.status === 'Low Stock' ? 'bg-amber-50 text-amber-600' :
                      'bg-red-50 text-red-600'
                    }`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-slate-400 hover:text-primary-500 hover:bg-primary-50 rounded-lg transition-all">
                        <Edit2 size={16} />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/30 flex items-center justify-between">
          <p className="text-sm text-slate-500">
            Showing <span className="font-bold text-slate-800">1</span> to <span className="font-bold text-slate-800">7</span> of <span className="font-bold text-slate-800">24</span> results
          </p>
          <div className="flex items-center gap-2">
            <button className="p-2 border border-slate-200 rounded-lg hover:bg-white transition-colors disabled:opacity-50" disabled>
              <ChevronLeft size={18} />
            </button>
            <div className="flex items-center gap-1">
              <button className="w-9 h-9 flex items-center justify-center bg-primary-500 text-white rounded-lg font-bold text-sm shadow-lg shadow-primary-500/20">1</button>
              <button className="w-9 h-9 flex items-center justify-center hover:bg-white text-slate-600 rounded-lg font-bold text-sm">2</button>
              <button className="w-9 h-9 flex items-center justify-center hover:bg-white text-slate-600 rounded-lg font-bold text-sm">3</button>
            </div>
            <button className="p-2 border border-slate-200 rounded-lg hover:bg-white transition-colors">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
