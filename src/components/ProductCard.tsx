import React from 'react';
import { Clock, MapPin, Leaf, TrendingDown } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  isCustomerView?: boolean;
  onAddToCart?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, isCustomerView = false, onAddToCart }) => {
  const getExpiryColor = (days: number) => {
    if (days <= 1) return 'text-red-600 bg-red-50';
    if (days <= 3) return 'text-orange-600 bg-orange-50';
    return 'text-yellow-600 bg-yellow-50';
  };

  const getDemandColor = (demand: string) => {
    switch (demand) {
      case 'high': return 'text-green-600 bg-green-50';
      case 'medium': return 'text-yellow-600 bg-yellow-50';
      case 'low': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const savings = product.originalPrice - product.currentPrice;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      <div className="aspect-w-16 aspect-h-9 relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 left-3">
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getExpiryColor(product.daysUntilExpiry)}`}>
            {product.daysUntilExpiry} day{product.daysUntilExpiry !== 1 ? 's' : ''} left
          </span>
        </div>
        {product.discountPercentage > 0 && (
          <div className="absolute top-3 right-3">
            <span className="px-2 py-1 text-xs font-bold bg-red-600 text-white rounded-full">
              {product.discountPercentage}% OFF
            </span>
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
            <p className="text-sm text-gray-600">{product.category}</p>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-green-600">${product.currentPrice}</span>
              {product.discountPercentage > 0 && (
                <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
              )}
            </div>
            {savings > 0 && (
              <p className="text-sm font-medium text-green-600">Save ${savings.toFixed(2)}</p>
            )}
          </div>
        </div>

        <p className="text-sm text-gray-600 mb-3">{product.description}</p>

        <div className="flex flex-wrap gap-2 mb-3">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4 text-gray-400" />
            <span className="text-xs text-gray-600">Expires {product.expiryDate}</span>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin className="h-4 w-4 text-gray-400" />
            <span className="text-xs text-gray-600">{product.location}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-xs text-gray-600">Stock:</span>
            <span className="text-xs font-medium text-gray-900">{product.stockLevel} units</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getDemandColor(product.demand)}`}>
              {product.demand} demand
            </span>
          </div>
        </div>

        {isCustomerView && (
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <Leaf className="h-4 w-4 text-green-500" />
              <span className="text-sm font-medium text-green-600">
                {product.sustainabilityScore}/100 Eco Score
              </span>
            </div>
            <button
              onClick={() => onAddToCart?.(product)}
              className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        )}

        {!isCustomerView && (
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <TrendingDown className="h-4 w-4 text-blue-500" />
              <span className="text-sm text-blue-600">AI Optimized</span>
            </div>
            <div className="flex space-x-2">
              <button className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                Edit
              </button>
              <button className="px-3 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-lg hover:bg-green-200 transition-colors">
                Adjust Price
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;