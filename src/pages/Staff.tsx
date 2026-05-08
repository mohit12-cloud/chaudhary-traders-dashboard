import React, { useState } from 'react';
import { 
  Check, 
  X, 
  Calendar, 
  DollarSign, 
  Clock, 
  MoreVertical,
  TrendingUp,
  Award
} from 'lucide-react';

const staffMembers = [
  { id: 1, name: 'Rahul Sharma', role: 'Store Manager', salary: '₹35,000', attendance: 'Present', daysWorked: 24, bonus: '₹2,000' },
  { id: 2, name: 'Priya Singh', role: 'Sales Associate', salary: '₹18,000', attendance: 'Present', daysWorked: 26, bonus: '₹500' },
  { id: 3, name: 'Amit Kumar', role: 'Sales Associate', salary: '₹18,000', attendance: 'Absent', daysWorked: 22, bonus: '₹0' },
  { id: 4, name: 'Sonia Verma', role: 'Inventory Clerk', salary: '₹22,000', attendance: 'Present', daysWorked: 25, bonus: '₹1,000' },
  { id: 5, name: 'Vikram Das', role: 'Support Staff', salary: '₹15,000', attendance: 'On Leave', daysWorked: 18, bonus: '₹0' },
];

const Staff: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'attendance' | 'salary'>('attendance');

  return (
    <div className="space-y-8 pb-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Staff Management</h1>
          <p className="text-slate-500 mt-1">Monitor attendance and manage employee payouts.</p>
        </div>
        <div className="flex bg-white p-1 rounded-xl border border-slate-200">
          <button 
            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'attendance' ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/20' : 'text-slate-500 hover:text-slate-800'}`}
            onClick={() => setActiveTab('attendance')}
          >
            Attendance
          </button>
          <button 
            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'salary' ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/20' : 'text-slate-500 hover:text-slate-800'}`}
            onClick={() => setActiveTab('salary')}
          >
            Salary Updates
          </button>
        </div>
      </div>

      {activeTab === 'attendance' ? (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card bg-white border-l-4 border-l-accent-green">
              <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">Present Today</p>
              <h3 className="text-3xl font-bold text-slate-800 mt-1">8 <span className="text-sm font-normal text-slate-400">/ 10</span></h3>
            </div>
            <div className="card bg-white border-l-4 border-l-red-400">
              <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">Absent</p>
              <h3 className="text-3xl font-bold text-slate-800 mt-1">1</h3>
            </div>
            <div className="card bg-white border-l-4 border-l-secondary-400">
              <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">On Leave</p>
              <h3 className="text-3xl font-bold text-slate-800 mt-1">1</h3>
            </div>
          </div>

          <div className="card !p-0 overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <h3 className="font-bold text-slate-800 flex items-center gap-2">
                <Calendar size={18} className="text-primary-500" />
                Daily Attendance: {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
              </h3>
              <button className="text-sm font-bold text-primary-500 hover:underline">Mark All Present</button>
            </div>
            <div className="divide-y divide-slate-100">
              {staffMembers.map((staff) => (
                <div key={staff.id} className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-bold">
                      {staff.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">{staff.name}</h4>
                      <p className="text-xs text-slate-500 font-medium">{staff.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${staff.attendance === 'Present' ? 'bg-green-100 text-green-700 ring-2 ring-green-500/20' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}>
                      <Check size={14} /> Present
                    </button>
                    <button className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${staff.attendance === 'Absent' ? 'bg-red-100 text-red-700 ring-2 ring-red-500/20' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}>
                      <X size={14} /> Absent
                    </button>
                    <button className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${staff.attendance === 'On Leave' ? 'bg-blue-100 text-blue-700 ring-2 ring-blue-500/20' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}>
                      <Clock size={14} /> Leave
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="card bg-gradient-to-r from-primary-500 to-primary-600 text-white flex items-center justify-between p-8 border-none overflow-hidden relative">
            <div className="relative z-10">
              <p className="text-white/80 text-sm font-bold uppercase tracking-wider">Total Monthly Payout</p>
              <h3 className="text-4xl font-bold mt-1">₹1,12,500</h3>
              <div className="flex items-center gap-2 mt-4 text-xs font-bold bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full w-fit">
                <TrendingUp size={14} /> +₹4,500 from last month
              </div>
            </div>
            <DollarSign size={120} className="absolute -right-8 -bottom-8 text-white/10" />
            <button className="relative z-10 btn-primary bg-white text-primary-600 hover:bg-slate-50 shadow-none border-none px-6 py-3">
              Process Payroll
            </button>
          </div>

          <div className="card !p-0 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50/50">
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Staff Member</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Base Salary</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Days Worked</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Bonus</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Calculated Payout</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {staffMembers.map((staff) => (
                    <tr key={staff.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap font-bold text-slate-800">{staff.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{staff.salary}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-slate-800">{staff.daysWorked} / 26</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-accent-green font-bold">{staff.bonus}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-3 py-1 bg-primary-50 text-primary-600 rounded-lg font-bold text-sm">
                          ₹{ (parseInt(staff.salary.replace('₹', '').replace(',', '')) + parseInt(staff.bonus.replace('₹', '').replace(',', ''))).toLocaleString() }
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <button className="text-primary-500 hover:text-primary-700 p-2 hover:bg-primary-50 rounded-lg transition-all">
                          <Award size={18} />
                        </button>
                        <button className="text-slate-400 hover:text-slate-600 p-2 hover:bg-slate-100 rounded-lg transition-all ml-1">
                          <MoreVertical size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Staff;
