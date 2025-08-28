import React from 'react';
import { DashboardData } from '../services/dashboardService';

interface EquipmentProps {
  data: DashboardData | null;
}

const Equipment: React.FC<EquipmentProps> = ({ data }) => {
  if (!data || !data.equipmentSection) {
    return <div>No Equipment data available</div>;
  }

  const { equipmentSection } = data;

  // Extract posts (equipment1 - equipmentN)
  const equipmentPosts = Object.values(equipmentSection)
    .filter((item: any) => item?.news_type === "Equipments")
    .slice(0, 5)
    .map((news: any) => ({
      id: news.id,
      title: news.title,
      image: news.web_image_url || news.thumbnail_image_url,
      date: news.published_date,
      url: `/news/${news.id}`, // adjust route to your detail page
      publishedBy: news.published_by || "Chemical Today",
      country: news.country,
    }));

  // Advertisement (horizontal banner)
  const equipmentAd = equipmentSection.horizontal_banner
    ? {
        image: equipmentSection.horizontal_banner.image,
        url: equipmentSection.horizontal_banner.redirect_url,
      }
    : null;

  return (
    <div className="min-h-screen bg-white text-black px-[5%] py-10">
      {/* Section Heading */}
      <div className="flex items-center justify-between border-b-200 pb-2 mb-0">
        <h1 className="text-2xl font-bold bg-gray-300 px-2 py-1 mb-0">Equipment</h1>
        <a href="#" className="text-blue-600 hover:underline">
          View More &gt;&gt;
        </a>
      </div>

      {/* Line below heading */}
      <hr className="border-gray-300 w-full max-w-[1368px] mt-0 mb-5" />

      {/* Horizontal post cards */}
      <div className="flex justify-between gap-4 overflow-x-auto w-[1361px] h-[380px]">
        {equipmentPosts.map((post, index) => (
          <a
            key={post.id || index}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border rounded-none shadow-none w-60 flex-shrink-0 hover:shadow-lg transition"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-[258px] h-[200px] object-cover mb-0"
            />
            <div className="p-0">
              <span className="text-white bg-blue-600 text-sm px-1 py-1">
                {post.date}
              </span>
              <h2 className="font-semibold text-sm mt-2 line-clamp-3">
                {post.title}
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                {post.publishedBy} {post.country ? `- ${post.country}` : ""}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* Advertisement Section */}
      {equipmentAd && (
        <div className="mt-8">
          <a
            href={equipmentAd.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={equipmentAd.image}
              alt="Advertisement"
              className="w-full h-24 object-cover rounded-none shadow-none hover:opacity-90 transition"
            />
          </a>
        </div>
      )}
    </div>
  );
};

export default Equipment;
