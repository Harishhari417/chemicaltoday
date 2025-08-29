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

const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [ads, setAds] = useState<Advertisement[]>([]);
  const [horizontalBanner, setHorizontalBanner] = useState<Advertisement | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch Posts
        const postsRes = await fetch("https://admin.chemicaltoday.in/news/Posts/page/1");
        const postsData = await postsRes.json();
        setPosts(postsData.data || []);

        // Fetch Ads
        const adsRes = await fetch("https://admin.chemicaltoday.in/common_utils/common_utils/Posts");
        const adsData = await adsRes.json();

        // Set horizontal banner
        setHorizontalBanner(
          adsData.horizontal_banner
            ? {
                image: adsData.horizontal_banner.image,
                redirect_url: adsData.horizontal_banner.redirect_url,
                name: adsData.horizontal_banner.name,
              }
            : null
        );

        // Set 4 vertical banners
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
  }, []);

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
              className="w-[1368px] h-[115px]  object-cover rounded-none mr-[76.05px] ml-[20px]"
            />
          </a>
        </div>
      )}

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 max-w-[1368px] mx-auto">

        {/* Left: Posts */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 w-[967px] h-[1475px]">
          {posts.length > 0 ? (
            posts.map((post) => (
              <Link
                key={post.id}
                to={`/posts/${post.id}`}
                className="w-[464px] h-[350px] border rounded-none px-0 py-0"
              >
                <img
                  src={post.thumbnail_image_url || post.web_image_url}
                  alt={post.title}
                  className="w-[462px] h-[200px] object-fit rounded-none mt-[0px]"
                />
                 <span className="text-white bg-blue-600 text-sm px-1 py-1">
                  {post.published_date}
                </span>
                <h2 className="text-lg font-semibold mt-2 px-2">{post.title}</h2>
                <p className="text-gray-500 text-xs md:text-sm mt-1 px-2">
                      {post.published_by || "Chemical Today"}
                    </p>
              </Link>
            ))
          ) : (
            <p>No posts available</p>
          )}
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
