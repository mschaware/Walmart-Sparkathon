import React from 'react';
import { Store, User, BarChart3, Settings, Leaf, ShoppingCart } from 'lucide-react';

interface NavigationProps {
  activeView: string;
  onViewChange: (view: string) => void;
  userRole: 'retailer' | 'customer';
}

const Navigation: React.FC<NavigationProps> = ({ activeView, onViewChange, userRole }) => {
  const retailerNavItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'inventory', label: 'Inventory', icon: Store },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'rules', label: 'Discount Rules', icon: Settings },
  ];

  const customerNavItems = [
    { id: 'discover', label: 'Discover Deals', icon: ShoppingCart },
    { id: 'sustainability', label: 'My Impact', icon: Leaf },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  const navItems = userRole === 'retailer' ? retailerNavItems : customerNavItems;

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-gray-900">WasteWise</span>
            </div>
            <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
              {userRole === 'retailer' ? 'Retailer' : 'Customer'}
            </span>
          </div>
          
          <div className="flex space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onViewChange(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeView === item.id
                      ? 'bg-green-100 text-green-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          <button
            onClick={() => onViewChange(userRole === 'retailer' ? 'customer' : 'retailer')}
            className="px-4 py-2 text-sm font-medium text-green-700 bg-green-100 rounded-lg hover:bg-green-200 transition-colors"
          >
            Switch to {userRole === 'retailer' ? 'Customer' : 'Retailer'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;