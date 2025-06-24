export interface Product {
  id: string;
  name: string;
  category: string;
  originalPrice: number;
  currentPrice: number;
  discountPercentage: number;
  expiryDate: string;
  daysUntilExpiry: number;
  stockLevel: number;
  demand: 'high' | 'medium' | 'low';
  image: string;
  description: string;
  barcode: string;
  supplier: string;
  location: string;
  sustainabilityScore: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'retailer' | 'customer';
  points: number;
  level: string;
  preferences: string[];
}

export interface WasteMetrics {
  totalProducts: number;
  expiringSoon: number;
  wasteReduced: number;
  revenueRecovered: number;
  co2Saved: number;
  customersHelped: number;
}

export interface DiscountRule {
  id: string;
  name: string;
  category: string;
  daysBeforeExpiry: number;
  discountPercentage: number;
  minStock: number;
  active: boolean;
}