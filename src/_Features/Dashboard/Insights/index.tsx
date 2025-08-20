import React from 'react';
import { DashboardData } from '../services/dashboardService';

interface InsightsProps {
  data: DashboardData | null;
}

const Insights: React.FC<InsightsProps> = ({ data }) => {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-purple-600 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Insights</h1>
        <p className="text-xl">Dashboard Insights Component</p>
      </div>
    </div>
  );
};

export default Insights;