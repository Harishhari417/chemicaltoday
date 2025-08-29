import React from 'react';
import { DashboardData } from '../services/dashboardService';

interface SustainabilityProps {
  data: DashboardData | null;
}

const Sustainability: React.FC<SustainabilityProps> = ({ data }) => {
  if (!data || !data.sustainabilitySection) {
    return <div>No Sustainability data available</div>;
  }

  const { sustainabilitySection } = data;

  // Extract news posts (news1 - news6)
  const sustainabilityPosts = Object.values(sustainabilitySection)
    .filter((item: any) => item?.news_type === "Sustainability")
    .slice(0, 5) 
    .map((news: any) => ({
      title: news.title,
      image: news.web_image_url || news.thumbnail_image_url,
      date: news.published_date,
      url: `/news/${news.id}`, // you can adjust this to real detail page
      publishedBy: news.published_by || "Chemical Today",
    }));

  // Advertisement (using horizontal banner as example)
  const sustainabilityAd = sustainabilitySection.horizontal_banner
    ? {
        image: sustainabilitySection.horizontal_banner.image,
        url: sustainabilitySection.horizontal_banner.redirect_url,
      }
    : null;

  return (
  <div className="min-h-screen bg-white text-black px-[5%] py-10 overflow-x-hidden ">
    {/* Section Heading */}
    <div className="flex items-center justify-between border-b-200 pb-0 mb-0">
      <h1 className="text-2xl font-bold bg-gray-300 px-2 py-1 mb-0">Sustainability</h1>
      <a href="#" className="text-blue-600 hover:underline">
        View More &gt;&gt;
      </a>
    </div>

    {/* Line below heading */}
    <hr className=" border-gray-300 w-full max-w-[1368px]  mt-0 mb-5" />

      {/* Horizontal post cards */}
      <div className="flex justify-between gap-4 overflow-x-auto w-[1361px] h-[380px]">
        {sustainabilityPosts.map((post, index) => (
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
              <span className="text-white bg-blue-600 text-sm px-1 py-1 mt-[0px] ">
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
      {sustainabilityAd && (
        <div className="mt-8">
          <a
            href={sustainabilityAd.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={sustainabilityAd.image}
              alt="Advertisement"
              className="w-full h-24 object-cover rounded-none shadow-none hover:opacity-90 transition"
            />
          </a>
        </div>
      )}
    </div>
  );
};

export default Sustainability;
