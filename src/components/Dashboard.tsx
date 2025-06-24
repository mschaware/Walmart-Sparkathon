import React from 'react';
import { TrendingUp, Package, AlertTriangle, DollarSign, Leaf, Users } from 'lucide-react';
import { WasteMetrics } from '../types';

interface DashboardProps {
  metrics: WasteMetrics;
}

const Dashboard: React.FC<DashboardProps> = ({ metrics }) => {
  const stats = [
    {
      name: 'Total Products',
      value: metrics.totalProducts,
      icon: Package,
      color: 'bg-blue-500',
      change: '+12%',
      changeType: 'positive'
    },
    {
      name: 'Expiring Soon',
      value: metrics.expiringSoon,
      icon: AlertTriangle,
      color: 'bg-yellow-500',
      change: '-8%',
      changeType: 'positive'
    },
    {
      name: 'Waste Reduced',
      value: metrics.wasteReduced,
      icon: Leaf,
      color: 'bg-green-500',
      change: '+24%',
      changeType: 'positive'
    },
    {
      name: 'Revenue Recovered',
      value: `$${metrics.revenueRecovered}`,
      icon: DollarSign,
      color: 'bg-emerald-500',
      change: '+18%',
      changeType: 'positive'
    },
    {
      name: 'CO₂ Saved (kg)',
      value: metrics.co2Saved,
      icon: Leaf,
      color: 'bg-green-600',
      change: '+31%',
      changeType: 'positive'
    },
    {
      name: 'Customers Helped',
      value: metrics.customersHelped,
      icon: Users,
      color: 'bg-purple-500',
      change: '+15%',
      changeType: 'positive'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Retailer Dashboard</h1>
        <p className="mt-2 text-gray-600">
          Monitor your waste reduction impact and optimize pricing strategies
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">{stat.name}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  <div className="flex items-center mt-2">
                    <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                    <span className="text-sm font-medium text-green-600">{stat.change}</span>
                    <span className="text-sm text-gray-500 ml-1">vs last month</span>
                  </div>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Waste Reduction Trends</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">This Week</span>
              <div className="flex items-center space-x-2">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '78%' }}></div>
                </div>
                <span className="text-sm font-medium text-gray-900">78%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Last Week</span>
              <div className="flex items-center space-x-2">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
                <span className="text-sm font-medium text-gray-900">65%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Last Month</span>
              <div className="flex items-center space-x-2">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-400 h-2 rounded-full" style={{ width: '52%' }}></div>
                </div>
                <span className="text-sm font-medium text-gray-900">52%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Category Performance</h3>
          <div className="space-y-4">
            {[
              { category: 'Fruits', saved: 45, color: 'bg-green-500' },
              { category: 'Dairy', saved: 32, color: 'bg-blue-500' },
              { category: 'Bakery', saved: 28, color: 'bg-yellow-500' },
              { category: 'Vegetables', saved: 38, color: 'bg-emerald-500' },
              { category: 'Meat', saved: 15, color: 'bg-red-500' }
            ].map((item) => (
              <div key={item.category} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                  <span className="text-sm text-gray-700">{item.category}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-900">{item.saved} items saved</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;