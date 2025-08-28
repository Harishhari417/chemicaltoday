import React, { useEffect, useState } from "react";

interface Product {
  title: string;
  description: string;
  image: string;
  link?: string;
  published_date?: string;
}

interface Advertisement {
  name: string;
  image: string;
  redirect_url: string;
}

interface ProductSection {
  [key: string]: any;
}

const ProductPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [ads, setAds] = useState<Advertisement[]>([]);

  useEffect(() => {
    // Replace with your API call
    fetch("https://admin.chemicaltoday.in/homepage/home_page_data")
      .then((res) => res.json())
      .then((data) => {
        const section: ProductSection = data.productSection;

        // Extract product posts (post1, post2, post3, post4...)
        const posts: Product[] = Object.values(section)
          .filter((item: any) => item?.news_type === "Products")
          .map((item: any) => ({
            title: item.title,
            description: item.image_caption || item.content?.slice(0, 120) + "...",
            image: item.thumbnail_image_url || item.web_image_url,
            link: "#", // If you have detail page link, map here
            published_date: item.published_date,
          }));

        // Extract advertisements (advt1, advt2, advt3...)
        const advertisements: Advertisement[] = Object.values(section)
          .filter((item: any) => item?.advt_type)
          .map((item: any) => ({
            name: item.name,
            image: item.image,
            redirect_url: item.redirect_url,
          }));

        setProducts(posts);
        setAds(advertisements);
      })
      .catch((err) => console.error("Error fetching productSection:", err));
  }, []);

  return (
    <div className="overflow-x-hidden">
      <div className="h-auto ml-[5%] mr-[5%]">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-300 mb-0 pb-1">
          <h1 className="text-xl font-semibold text-black bg-gray-300 px-10 py-1 w-fit mb-0">
            Products
          </h1>
          <a href="#" className="text-blue-600 font-medium hover:underline">
            View more &gt;&gt;
          </a>
        </div>
         <hr className="my-0 border-gray-300 w-full max-w-[1368px] mx-auto mt-[0px]" />

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 h-full mt-10">
          {/* Left: Products */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-6">
            {products.length > 0 ? (
              products.map((product, index) => (
                <a
                  key={index}
                  href={product.link || "#"}
                  className=" w-[406px] h-[200px] rounded-none border object-cover  p-3 transition"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-[406px] h-[200px] object-cover rounded-none"
                  />
                  <h2 className="text-lg font-semibold mt-2">
                    {product.title}
                  </h2>
                  <p className="text-gray-600 text-sm">{product.description}</p>
                  <span className="text-xs text-gray-500 block mt-1">
                    {product.published_date}
                  </span>
                </a>
              ))
            ) : (
              <p>No products available</p>
            )}
          </div>

          {/* Right: Ads */}
          <div className="lg:col-span-2 space-y-4">
            {ads.length > 0 ? (
              ads.map((ad, i) => (
                <a
                  key={i}
                  href={ad.redirect_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={ad.image}
                    alt={ad.name}
                    className="rounded-none shadow w-[400px] h-[200px] ml-[40px]"
                  />
                </a>
              ))
            ) : (
              <p>No ads available</p>
            )}
          </div>
        </div>
      </div>

      {/* Knowledge Partner (Static, or can also come from API if available) */}
      <div className="bg-white mt-8 py-6 flex flex-col items-center">
        <a
          href="https://rrma-global.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex justify-center"
        >
          <img
            src="https://new-chemical-today.s3.amazonaws.com/advertisements/Associate%20partner%20top%20banner/Associate%20partner%20top%20banner/Frame_230.jpg"
            alt="Our Knowledge Partner"
            className="w-full h-[80px] md:h-[115px] object-cover"
          />
        </a>
      </div>
    </div>
  );
};

export default ProductPage;
