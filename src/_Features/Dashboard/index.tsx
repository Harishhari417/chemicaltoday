import React from 'react';
import { useState, useEffect } from 'react';
import { fetchDashboardData, DashboardData } from './services/dashboardService';
import TopSection from './Top section';
import PostSEction from './Post SEction';
import Insights from './Insights';
import Spotlight from './Spotlight';
import Products from './Products';
import Equipment from './Equipment';
import Event from './Event';
import Sustainability from './Sustainability';
import Digitalization from './Digitalization';
import ChemicalTodayPage from "./Spotlight"; 

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        setLoading(true);
        const data = await fetchDashboardData();
        setDashboardData(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch dashboard data');
        console.error('Dashboard data fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    loadDashboardData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading dashboard data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Error Loading Dashboard</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <TopSection data={dashboardData} />
      <PostSEction data={dashboardData} />
      <Insights data={dashboardData} />
      <Spotlight data={dashboardData} />
      <Products data={dashboardData} />
      <Equipment data={dashboardData} />
      <Event data={dashboardData} />
      <Sustainability data={dashboardData} />
      <Digitalization data={dashboardData} />
       <ChemicalTodayPage data={dashboardData || undefined} />
    </div>
  );
};

export default Dashboard;