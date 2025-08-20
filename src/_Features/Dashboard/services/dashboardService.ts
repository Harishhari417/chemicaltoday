export interface DashboardData {
  // Define the structure based on your API response
  [key: string]: any;
}

export const fetchDashboardData = async (): Promise<DashboardData> => {
  try {
    const response = await fetch('https://admin.chemicaltoday.in/homepage/home_page_data');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    throw error;
  }
};