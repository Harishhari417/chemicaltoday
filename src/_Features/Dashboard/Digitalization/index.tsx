import React from 'react';
import { DashboardData } from '../services/dashboardService';

interface DigitalizationProps {
  data: DashboardData | null;
}

const Digitalization: React.FC<DigitalizationProps> = ({ data }) => {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-teal-500 to-teal-600 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Digitalization</h1>
        <p className="text-xl">Dashboard Digitalization Component</p>
      </div>
    </div>
  );
};

export default Digitalization;