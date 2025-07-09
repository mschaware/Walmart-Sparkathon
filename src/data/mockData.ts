import { Product, User, WasteMetrics, DiscountRule } from '../types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Organic Bananas',
    category: 'Fruits',
    originalPrice: 3.99,
    currentPrice: 2.39,
    discountPercentage: 40,
    expiryDate: '2025-01-20',
    daysUntilExpiry: 2,
    stockLevel: 15,
    demand: 'high',
    image: 'https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Fresh organic bananas, perfect for smoothies or snacks',
    barcode: '1234567890123',
    supplier: 'Green Valley Farms',
    location: 'Aisle 1, Section A',
    sustainabilityScore: 95
  },
  {
    id: '2',
    name: 'Greek Yogurt',
    category: 'Dairy',
    originalPrice: 5.49,
    currentPrice: 3.84,
    discountPercentage: 30,
    expiryDate: '2025-01-22',
    daysUntilExpiry: 4,
    stockLevel: 8,
    demand: 'medium',
    image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Creamy Greek yogurt with probiotics',
    barcode: '2345678901234',
    supplier: 'Mountain Dairy Co.',
    location: 'Refrigerated Section 2',
    sustainabilityScore: 88
  },
  {
    id: '3',
    name: 'Artisan Bread',
    category: 'Bakery',
    originalPrice: 4.25,
    currentPrice: 2.55,
    discountPercentage: 40,
    expiryDate: '2025-01-19',
    daysUntilExpiry: 1,
    stockLevel: 6,
    demand: 'low',
    image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Freshly baked artisan sourdough bread',
    barcode: '3456789012345',
    supplier: 'Local Bakery',
    location: 'Bakery Section',
    sustainabilityScore: 92
  },
  {
    id: '4',
    name: 'Mixed Salad Greens',
    category: 'Vegetables',
    originalPrice: 2.99,
    currentPrice: 1.79,
    discountPercentage: 40,
    expiryDate: '2025-01-21',
    daysUntilExpiry: 3,
    stockLevel: 12,
    demand: 'high',
    image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Fresh mixed greens perfect for salads',
    barcode: '4567890123456',
    supplier: 'Fresh Fields Farm',
    location: 'Produce Section',
    sustainabilityScore: 97
  },
  {
    id: '5',
    name: 'Chicken Breast',
    category: 'Meat',
    originalPrice: 12.99,
    currentPrice: 9.09,
    discountPercentage: 30,
    expiryDate: '2025-01-20',
    daysUntilExpiry: 2,
    stockLevel: 4,
    demand: 'medium',
    image: 'https://images.pexels.com/photos/616401/pexels-photo-616401.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Fresh boneless chicken breast',
    barcode: '5678901234567',
    supplier: 'Premium Poultry',
    location: 'Meat Counter',
    sustainabilityScore: 75
  },
  {
    id: '6',
    name: 'Fresh Strawberries',
    category: 'Fruits',
    originalPrice: 4.49,
    currentPrice: 2.69,
    discountPercentage: 40,
    expiryDate: '2025-01-21',
    daysUntilExpiry: 3,
    stockLevel: 9,
    demand: 'high',
    image: 'https://images.pexels.com/photos/70746/strawberries-red-fruit-royalty-free-70746.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Sweet, juicy strawberries',
    barcode: '6789012345678',
    supplier: 'Berry Best Farms',
    location: 'Produce Section',
    sustainabilityScore: 94
  }
];

export const mockUser: User = {
  id: '1',
  name: 'Mayur Chaware',
  email: 'sarah@example.com',
  role: 'customer',
  points: 2450,
  level: 'Eco Warrior',
  preferences: ['Organic', 'Dairy-Free', 'Local']
};

export const mockRetailer: User = {
  id: '2',
  name: 'Mike Chen',
  email: 'mike@freshmarket.com',
  role: 'retailer',
  points: 0,
  level: 'Store Manager',
  preferences: []
};

export const mockWasteMetrics: WasteMetrics = {
  totalProducts: 156,
  expiringSoon: 23,
  wasteReduced: 89,
  revenueRecovered: 3420,
  co2Saved: 145,
  customersHelped: 67
};

export const mockDiscountRules: DiscountRule[] = [
  {
    id: '1',
    name: 'Fruits - 3 Day Rule',
    category: 'Fruits',
    daysBeforeExpiry: 3,
    discountPercentage: 30,
    minStock: 5,
    active: true
  },
  {
    id: '2',
    name: 'Dairy - 4 Day Rule',
    category: 'Dairy',
    daysBeforeExpiry: 4,
    discountPercentage: 25,
    minStock: 3,
    active: true
  },
  {
    id: '3',
    name: 'Bakery - 1 Day Rule',
    category: 'Bakery',
    daysBeforeExpiry: 1,
    discountPercentage: 50,
    minStock: 2,
    active: true
  }
];