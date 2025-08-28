import React from "react";
import { DashboardData } from "../services/dashboardService";

interface InsightsProps {
  data: DashboardData | null;
}

const Insights: React.FC<InsightsProps> = ({ data }) => {
  if (!data || !data.insightSection) {
    return <div>No Insights data available</div>;
  }

  const { insightSection } = data;

  // Extract Insights posts
  const insightPosts = Object.values(insightSection)
    .filter((item: any) => item?.news_type === "Insights")
    .slice(0, 4)
    .map((news: any) => ({
      title: news.title,
      image: news.web_image_url || news.thumbnail_image_url,
      date: news.published_date,
      url: `/news/${news.id}`,
      publishedBy: news.published_by || "Chemical Today",
    }));

  // Extract banners (array expected)
  const insightBanners = insightSection.horizontal_banner || [];

  return (
    <div className="min-h-screen bg-white text-black px-[5%] py-10">
      {/* Section Heading */}
      <div className="flex items-center justify-between border-b-200 pb-2 mb-0">
        <h1 className="text-2xl font-bold bg-gray-300 px-2 py-1 mb-0">
          Insights
        </h1>
        <a href="/news/insights" className="text-blue-600 hover:underline">
          View More &gt;&gt;
        </a>
      </div>

      {/* Line below heading */}
      <hr className="border-gray-300 w-full max-w-[1368px] mt-0 mb-5" />

      {/* Horizontal post cards */}
      <div className="flex justify-between gap-4 overflow-x-auto w-[1361px] h-[380px]">
        {insightPosts.map((post, index) => (
          <a
            key={index}
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
              <p className="text-xs text-gray-500 mt-1">{post.publishedBy}</p>
            </div>
          </a>
        ))}
      </div>

      {/* Advertisement Section */}
      {insightBanners.length > 0 && (
        <div className="relative w-full overflow-hidden bg-white py-4 mt-8">
          <div className="flex animate-scroll whitespace-nowrap">
            {[...insightBanners, ...insightBanners].map((banner: any, idx) => (
              <a
                key={idx}
                href={banner.redirect_url}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 flex-shrink-0"
              >
                <img
                  src={banner.image}
                  alt={`Banner ${idx}`}
                  className="w-[320px] h-[120px] object-cover rounded-none shadow-md hover:opacity-90 transition"
                />
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Insights;
