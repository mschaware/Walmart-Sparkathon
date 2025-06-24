import { Product } from '../types';

export const calculateDynamicPrice = (product: Product): number => {
  const { originalPrice, daysUntilExpiry, demand, stockLevel } = product;
  let discountPercentage = 0;

  // Base discount based on days until expiry
  if (daysUntilExpiry <= 1) {
    discountPercentage = 50;
  } else if (daysUntilExpiry <= 2) {
    discountPercentage = 40;
  } else if (daysUntilExpiry <= 3) {
    discountPercentage = 30;
  } else if (daysUntilExpiry <= 5) {
    discountPercentage = 20;
  } else if (daysUntilExpiry <= 7) {
    discountPercentage = 10;
  }

  // Adjust based on demand
  if (demand === 'high' && discountPercentage > 0) {
    discountPercentage = Math.max(10, discountPercentage - 10);
  } else if (demand === 'low') {
    discountPercentage = Math.min(60, discountPercentage + 10);
  }

  // Adjust based on stock level
  if (stockLevel > 20) {
    discountPercentage = Math.min(70, discountPercentage + 5);
  } else if (stockLevel < 5) {
    discountPercentage = Math.max(5, discountPercentage - 5);
  }

  const discountedPrice = originalPrice * (1 - discountPercentage / 100);
  return Math.round(discountedPrice * 100) / 100;
};

export const calculateSavings = (originalPrice: number, currentPrice: number): number => {
  return Math.round((originalPrice - currentPrice) * 100) / 100;
};

export const calculateDiscountPercentage = (originalPrice: number, currentPrice: number): number => {
  return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
};

export const calculateSustainabilityImpact = (products: Product[]): {
  co2Saved: number;
  wasteReduced: number;
  revenueRecovered: number;
} => {
  const totalSavings = products.reduce((sum, product) => {
    return sum + calculateSavings(product.originalPrice, product.currentPrice);
  }, 0);

  return {
    co2Saved: Math.round(totalSavings * 0.5), // Approximate CO2 saved in kg
    wasteReduced: products.length,
    revenueRecovered: Math.round(totalSavings * 100) / 100
  };
};