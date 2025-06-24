import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import InventoryManager from './components/InventoryManager';
import CustomerDiscoverView from './components/CustomerDiscoverView';
import SustainabilityView from './components/SustainabilityView';
import { mockProducts, mockUser, mockRetailer, mockWasteMetrics } from './data/mockData';

function App() {
  const [currentUser, setCurrentUser] = useState(mockRetailer);
  const [activeView, setActiveView] = useState(currentUser.role === 'retailer' ? 'dashboard' : 'discover');

  const handleViewChange = (view: string) => {
    if (view === 'retailer' || view === 'customer') {
      const newUser = view === 'retailer' ? mockRetailer : mockUser;
      setCurrentUser(newUser);
      setActiveView(newUser.role === 'retailer' ? 'dashboard' : 'discover');
    } else {
      setActiveView(view);
    }
  };

  const renderContent = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard metrics={mockWasteMetrics} />;
      case 'inventory':
        return <InventoryManager products={mockProducts} />;
      case 'analytics':
        return <Dashboard metrics={mockWasteMetrics} />;
      case 'rules':
        return <Dashboard metrics={mockWasteMetrics} />;
      case 'discover':
        return <CustomerDiscoverView products={mockProducts} user={currentUser} />;
      case 'sustainability':
        return <SustainabilityView user={currentUser} />;
      case 'profile':
        return <SustainabilityView user={currentUser} />;
      default:
        return <Dashboard metrics={mockWasteMetrics} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation
        activeView={activeView}
        onViewChange={handleViewChange}
        userRole={currentUser.role}
      />
      {renderContent()}
    </div>
  );
}

export default App;