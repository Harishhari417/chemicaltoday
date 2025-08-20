import React from 'react';
import { DashboardData } from '../services/dashboardService';

interface SustainabilityProps {
  data: DashboardData | null;
}

const Sustainability: React.FC<SustainabilityProps> = ({ data }) => {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-emerald-500 to-emerald-600 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Sustainability</h1>
        <p className="text-xl">Dashboard Sustainability Component</p>
      </div>
    </div>
  );
};

export default Sustainability;