import React from 'react';
import { DashboardData } from '../services/dashboardService';

interface SpotlightProps {
  data: DashboardData | null;
}

const Spotlight: React.FC<SpotlightProps> = ({ data }) => {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-yellow-500 to-yellow-600 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Spotlight</h1>
        <p className="text-xl">Dashboard Spotlight Component</p>
      </div>
    </div>
  );
};

export default Spotlight;