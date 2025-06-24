import React from 'react';
import { Leaf, Award, TrendingUp, Users, Globe, Recycle } from 'lucide-react';
import { User } from '../types';

interface SustainabilityViewProps {
  user: User;
}

const SustainabilityView: React.FC<SustainabilityViewProps> = ({ user }) => {
  const achievements = [
    { name: 'Waste Warrior', description: 'Saved 50+ items from waste', icon: Recycle, earned: true },
    { name: 'Eco Champion', description: 'Reduced 100kg CO₂ emissions', icon: Globe, earned: true },
    { name: 'Smart Shopper', description: 'Saved $500+ through deals', icon: TrendingUp, earned: true },
    { name: 'Community Hero', description: 'Influenced 10+ friends to join', icon: Users, earned: false },
    { name: 'Planet Protector', description: 'Prevented 1000kg food waste', icon: Leaf, earned: false },
    { name: 'Sustainability Master', description: 'Reached the highest level', icon: Award, earned: false }
  ];

  const monthlyStats = [
    { month: 'Jan', items: 12, co2: 8.5, savings: 45 },
    { month: 'Feb', items: 18, co2: 12.2, savings: 68 },
    { month: 'Mar', items: 15, co2: 10.8, savings: 52 },
    { month: 'Apr', items: 22, co2: 15.1, savings: 78 },
    { month: 'May', items: 19, co2: 13.4, savings: 65 },
    { month: 'Jun', items: 25, co2: 17.8, savings: 89 }
  ];

  const totalItems = monthlyStats.reduce((sum, stat) => sum + stat.items, 0);
  const totalCO2 = monthlyStats.reduce((sum, stat) => sum + stat.co2, 0);
  const totalSavings = monthlyStats.reduce((sum, stat) => sum + stat.savings, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Your Sustainability Impact</h1>
        <p className="mt-2 text-gray-600">
          Track your environmental impact and celebrate your contributions to reducing waste
        </p>
      </div>

      {/* Impact Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl text-white p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Recycle className="h-8 w-8" />
            <div>
              <h3 className="text-xl font-bold">{totalItems}</h3>
              <p className="text-green-100">Items Saved</p>
            </div>
          </div>
          <p className="text-sm text-green-100">
            You've prevented {totalItems} items from going to waste this year!
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl text-white p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Globe className="h-8 w-8" />
            <div>
              <h3 className="text-xl font-bold">{totalCO2.toFixed(1)}kg</h3>
              <p className="text-blue-100">CO₂ Reduced</p>
            </div>
          </div>
          <p className="text-sm text-blue-100">
            Your choices have reduced carbon emissions significantly!
          </p>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl text-white p-6">
          <div className="flex items-center space-x-3 mb-4">
            <TrendingUp className="h-8 w-8" />
            <div>
              <h3 className="text-xl font-bold">${totalSavings}</h3>
              <p className="text-purple-100">Money Saved</p>
            </div>
          </div>
          <p className="text-sm text-purple-100">
            Smart shopping while helping the environment!
          </p>
        </div>
      </div>

      {/* Monthly Progress Chart */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Monthly Progress</h3>
        <div className="space-y-4">
          {monthlyStats.map((stat, index) => (
            <div key={stat.month} className="flex items-center space-x-4">
              <div className="w-12 text-sm font-medium text-gray-600">{stat.month}</div>
              <div className="flex-1 grid grid-cols-3 gap-4">
                <div>
                  <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                    <span>Items</span>
                    <span>{stat.items}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${(stat.items / 30) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                    <span>CO₂ (kg)</span>
                    <span>{stat.co2}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${(stat.co2 / 20) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                    <span>Saved ($)</span>
                    <span>{stat.savings}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-purple-500 h-2 rounded-full"
                      style={{ width: `${(stat.savings / 100) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Achievements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((achievement) => {
            const Icon = achievement.icon;
            return (
              <div
                key={achievement.name}
                className={`p-4 rounded-lg border-2 transition-all ${
                  achievement.earned
                    ? 'border-green-200 bg-green-50'
                    : 'border-gray-200 bg-gray-50 opacity-60'
                }`}
              >
                <div className="flex items-center space-x-3 mb-2">
                  <div className={`p-2 rounded-lg ${
                    achievement.earned ? 'bg-green-100' : 'bg-gray-100'
                  }`}>
                    <Icon className={`h-5 w-5 ${
                      achievement.earned ? 'text-green-600' : 'text-gray-400'
                    }`} />
                  </div>
                  <div>
                    <h4 className={`font-medium ${
                      achievement.earned ? 'text-gray-900' : 'text-gray-500'
                    }`}>
                      {achievement.name}
                    </h4>
                    {achievement.earned && (
                      <span className="text-xs text-green-600 font-medium">Unlocked!</span>
                    )}
                  </div>
                </div>
                <p className={`text-sm ${
                  achievement.earned ? 'text-gray-600' : 'text-gray-400'
                }`}>
                  {achievement.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SustainabilityView;