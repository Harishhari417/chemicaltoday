import React from 'react';
import { DashboardData } from '../services/dashboardService';

interface EventProps {
  data: DashboardData | null;
}

const Event: React.FC<EventProps> = ({ data }) => {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-pink-500 to-pink-600 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Event</h1>
        <p className="text-xl">Dashboard Event Component</p>
      </div>
    </div>
  );
};

export default Event;