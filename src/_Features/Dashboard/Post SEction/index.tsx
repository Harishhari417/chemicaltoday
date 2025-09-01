import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Post {
  id: string;
  title: string;
  content: string;
  thumbnail_image_url?: string;
  web_image_url?: string;
  published_date?: string;
  published_by?: string;
}

interface Advertisement {
  image: string;
  redirect_url: string;
  name?: string;
}

// ✅ Pagination component
interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const pages: (number | string)[] = [];

  // Always show first 3
  for (let i = 1; i <= 3; i++) {
    pages.push(i);
  }

  // Middle section (keep current in center if possible)
  if (currentPage > 3 && currentPage < totalPages - 2) {
    if (currentPage > 4) pages.push("...");
    pages.push(currentPage - 1, currentPage, currentPage + 1);
    if (currentPage < totalPages - 3) pages.push("...");
  } else {
    pages.push("...");
  }

  // Always show last 3
  for (let i = totalPages - 2; i <= totalPages; i++) {
    pages.push(i);
  }

  // ✅ Handle page change + scroll to top
  const handleChange = (page: number) => {
    onPageChange(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex items-center gap-3">
      {/* Prev Button */}
      <button
        onClick={() => handleChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded ${
          currentPage === 1
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-gray-200 hover:bg-gray-300"
        }`}
      >
        «
      </button>

      {/* Page Numbers */}
      {pages.map((page, idx) =>
        typeof page === "number" ? (
          <button
            key={idx}
            onClick={() => handleChange(page)}
            className={`px-5 py-2 rounded ${
              page === currentPage
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {page}
          </button>
        ) : (
          <span key={idx} className="px-2">
            {page}
          </span>
        )
      )}

      {/* Next Button */}
      <button
        onClick={() => handleChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded ${
          currentPage === totalPages
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-gray-200 hover:bg-gray-300"
        }`}
      >
        »
      </button>
    </div>
  );
};

const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [ads, setAds] = useState<Advertisement[]>([]);
  const [horizontalBanner, setHorizontalBanner] =
    useState<Advertisement | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 264; // later you can set this dynamically from API

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch Posts with current page
        const postsRes = await fetch(
          `https://admin.chemicaltoday.in/news/Posts/page/${currentPage}`
        );
        const postsData = await postsRes.json();
        setPosts(postsData.data || []);

        // Fetch Ads
        const adsRes = await fetch(
          "https://admin.chemicaltoday.in/common_utils/common_utils/Posts"
        );
        const adsData = await adsRes.json();

        // Horizontal banner
        setHorizontalBanner(
          adsData.horizontal_banner
            ? {
                image: adsData.horizontal_banner.image,
                redirect_url: adsData.horizontal_banner.redirect_url,
                name: adsData.horizontal_banner.name,
              }
            : null
        );

        // Vertical ads
        const verticalAds: Advertisement[] = [];
        ["advt1", "advt2", "advt3", "advt4"].forEach((key) => {
          if (adsData[key]?.image) {
            verticalAds.push({
              image: adsData[key].image,
              redirect_url: adsData[key].redirect_url,
              name: adsData[key].name,
            });
          }
        });
        setAds(verticalAds);
      } catch (error) {
        console.error("Error fetching posts/ads:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage]); // re-fetch when page changes

  if (loading) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="overflow-x-hidden px-5 md:px-10">
      {/* Top Horizontal Banner */}
      {horizontalBanner?.image && (
        <div className="my-6 flex justify-center">
          <a
            href={horizontalBanner.redirect_url || "#"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={horizontalBanner.image}
              alt={horizontalBanner.name || "Advertisement"}
              className="w-[1368px] h-[115px] object-cover rounded-none"
            />
          </a>
        </div>
      )}

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 max-w-[1368px] mx-auto">
        {/* Left: Posts */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 w-[967px]">
          {posts.length > 0 ? (
            posts.map((post) => (
              <Link
                key={post.id}
                to={`/posts/${post.id}`}
                className="w-[464px] h-[350px] border rounded-none px-0 py-0 transition hover:shadow-lg hover:scale-105"
              >
                <img
                  src={post.thumbnail_image_url || post.web_image_url}
                  alt={post.title}
                  className="w-[462px] h-[200px] object-fit rounded-none"
                />
                <span className="text-white bg-blue-600 text-sm px-1 py-1">
                  {post.published_date}
                </span>
                <h2 className="text-lg font-semibold mt-2 px-2">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-xs md:text-sm mt-1 px-2">
                  {post.published_by || "Chemical Today"}
                </p>
              </Link>
            ))
          ) : (
            <p>No posts available</p>
          )}

          {/* ✅ Centered Pagination below posts */}
          <div className="col-span-full flex justify-center mt-6 ml-40 ">
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>

        {/* Right: 4 Vertical Banners */}
        <div className="lg:col-span-2 flex flex-col gap-4 px-5">
          {ads.map((ad, index) =>
            ad.image ? (
              <a
                key={index}
                href={ad.redirect_url || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={ad.image}
                  alt={ad.name || "Advertisement"}
                  className="rounded-none shadow w-[300px] h-[149px] ml-[150px]"
                />
              </a>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default PostsPage;
