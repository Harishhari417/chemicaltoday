import React, { useEffect, useState } from "react";
import { DashboardData } from "../services/dashboardService";

interface InsightsProps {
  data: DashboardData | null;
}

const Insights: React.FC<InsightsProps> = ({ data }) => {
  if (!data || !data.insightSection) {
    return <div>No Insights data available</div>;
  }

  const { insightSection } = data;

  const validTypes = ["Case Studies", "R&D", "Reports", "White Papers"];

  const insightPosts = Object.values(insightSection)
    .filter((item: any) => validTypes.includes(item?.news_type))
    .slice(0, 4)
    .map((news: any) => ({
      title: news.title,
      image: news.web_image_url || news.thumbnail_image_url,
      date: news.published_date,
      url: `/news/${news.id}`,
      publishedBy: news.published_by || "Chemical Today",
    }));

  const insightBanners = insightSection.horizontal_banner || [];

  // 👉 State for rotating ads
  const [currentAd, setCurrentAd] = useState(0);

  useEffect(() => {
    if (insightBanners.length === 0) return;

    const interval = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % insightBanners.length);
    }, 2000); // ⏳ 2 seconds per ad

    return () => clearInterval(interval);
  }, [insightBanners]);

  return (
    <div className="min-h-screen bg-white text-black px-[4%] py-10">
      {/* Section Heading */}
      <div className="flex items-center justify-between border-b-200 pb-0 mb-0">
        <h1 className="text-2xl font-bold bg-gray-300 px-2 py-1 mb-0">
          Insights
        </h1>
        <a href="/news/insights" className="text-blue-600 hover:underline">
          View More &gt;&gt;
        </a>
      </div>

      <hr className="border-gray-300 w-full max-w-[1368px] mt-0 mb-5" />

      
     {/* Horizontal post cards */}
<div className="flex justify-between gap-4 overflow-x-hidden w-[1361px] h-[400px]">
  {insightPosts.map((post, index) => (
    <a
      key={index}
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white border rounded-none shadow-none w-[323px] h-[230px] flex-shrink-0 hover:shadow-lg transition"
    >
      <img
        src={post.image}
        alt={post.title}
        className="w-[323px] h-[230px] object-cover mb-0"
      />
      <div className="p-1 px-0">
        <span className="text-white bg-blue-600 text-sm px-2 py-2 mt-0 ">
          {post.date}
        </span>
        <h2 className="font-semibold text-sm mt-2 line-clamp-3">
          {post.title}
        </h2>
        <p className="text-xs text-gray-500 mt-1">{post.publishedBy}</p>

        {/* ✅ Read More Button */}
        <div className="mt-2">
          <a
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-xs bg-white text-blue-600 px-2 py-1 rounded-none border border-blue-600 hover:bg-blue-700 hover:text-white transition"
          >
            Read More
          </a>
        </div>
      </div>
    </a>
  ))}
</div>


      {/* ✅ Rotating Advertisement Section */}
      {insightBanners.length > 0 && (
        <div className="relative w-full flex justify-center py-4 mt-8">
          <a
            href={insightBanners[currentAd].redirect_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={insightBanners[currentAd].image}
              alt={`Banner ${currentAd}`}
              className="max-w-[1368px] h-[115px] object-cover rounded-none shadow-md transition-opacity duration-500"
            />
          </a>
        </div>
      )}
    </div>
  );
};

export default Insights;
