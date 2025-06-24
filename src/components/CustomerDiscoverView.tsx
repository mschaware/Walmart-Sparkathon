import React, { useState } from 'react';
import { Search, MapPin, Leaf, Star, ShoppingCart } from 'lucide-react';
import { Product, User } from '../types';
import ProductCard from './ProductCard';

interface CustomerDiscoverViewProps {
  products: Product[];
  user: User;
}

const CustomerDiscoverView: React.FC<CustomerDiscoverViewProps> = ({ products, user }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('discount');
  const [cart, setCart] = useState<Product[]>([]);

  const categories = ['all', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = products
    .filter(product => product.discountPercentage > 0)
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'discount':
          return b.discountPercentage - a.discountPercentage;
        case 'expiry':
          return a.daysUntilExpiry - b.daysUntilExpiry;
        case 'price':
          return a.currentPrice - b.currentPrice;
        case 'sustainability':
          return b.sustainabilityScore - a.sustainabilityScore;
        default:
          return 0;
      }
    });

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const totalSavings = cart.reduce((sum, product) => sum + (product.originalPrice - product.currentPrice), 0);
  const sustainabilityImpact = cart.length * 0.5; // Approximate CO2 saved per item

  const levelProgress = (user.points % 1000) / 1000 * 100;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* User Welcome Section */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl text-white p-6 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, {user.name}!</h1>
            <p className="text-green-100">Discover amazing deals and help reduce food waste</p>
            <div className="flex items-center space-x-4 mt-4">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-400" />
                <span className="font-medium">{user.points} points</span>
              </div>
              <div className="flex items-center space-x-2">
                <Leaf className="h-5 w-5 text-green-200" />
                <span className="font-medium">{user.level}</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-2 mb-2">
              <ShoppingCart className="h-5 w-5" />
              <span className="font-medium">{cart.length} items in cart</span>
            </div>
            {totalSavings > 0 && (
              <p className="text-green-200">You're saving ${totalSavings.toFixed(2)}!</p>
            )}
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center justify-between text-sm mb-1">
            <span>Progress to next level</span>
            <span>{Math.round(levelProgress)}%</span>
          </div>
          <div className="w-full bg-green-400 bg-opacity-30 rounded-full h-2">
            <div
              className="bg-white rounded-full h-2 transition-all duration-300"
              style={{ width: `${levelProgress}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search for discounted products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex space-x-3">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="discount">Best Discounts</option>
              <option value="expiry">Expiring Soon</option>
              <option value="price">Lowest Price</option>
              <option value="sustainability">Most Sustainable</option>
            </select>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Available Deals</p>
              <p className="text-2xl font-bold text-green-600">{filteredProducts.length}</p>
            </div>
            <div className="bg-green-100 p-2 rounded-lg">
              <ShoppingCart className="h-5 w-5 text-green-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Avg. Discount</p>
              <p className="text-2xl font-bold text-orange-600">
                {Math.round(filteredProducts.reduce((sum, p) => sum + p.discountPercentage, 0) / filteredProducts.length || 0)}%
              </p>
            </div>
            <div className="bg-orange-100 p-2 rounded-lg">
              <Star className="h-5 w-5 text-orange-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Your Savings</p>
              <p className="text-2xl font-bold text-blue-600">${totalSavings.toFixed(2)}</p>
            </div>
            <div className="bg-blue-100 p-2 rounded-lg">
              <MapPin className="h-5 w-5 text-blue-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">CO₂ Impact</p>
              <p className="text-2xl font-bold text-green-600">{sustainabilityImpact.toFixed(1)}kg</p>
            </div>
            <div className="bg-green-100 p-2 rounded-lg">
              <Leaf className="h-5 w-5 text-green-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            isCustomerView={true}
            onAddToCart={addToCart}
          />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <ShoppingCart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-lg font-medium text-gray-900">No deals found</p>
          <p className="text-gray-600">Try adjusting your search or check back later for new discounts</p>
        </div>
      )}
    </div>
  );
};

export default CustomerDiscoverView;