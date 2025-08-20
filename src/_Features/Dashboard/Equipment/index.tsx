import React from 'react';
import { DashboardData } from '../services/dashboardService';

interface EquipmentProps {
  data: DashboardData | null;
}

const Equipment: React.FC<EquipmentProps> = ({ data }) => {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-indigo-600 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Equipment</h1>
        <p className="text-xl">Dashboard Equipment Component</p>
      </div>
    </div>
  );
};

export default Equipment;