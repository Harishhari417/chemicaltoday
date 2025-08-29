import React from "react";

interface SpotlightItem {
  web_image_url?: string;
  title?: string;
  published_by?: string;
}

interface Banner {
  name?: string;
  description?: string;
  web_image_url?: string;
  image?: string;
  redirect_url?: string;
  organization_name?: string;
  subscription_start_date?: string;
  subscription_end_date?: string;
}

interface SpotlightData {
  spotlightSection?: {
    plant_visit?: SpotlightItem;
    management1?: SpotlightItem;
    management2?: SpotlightItem;
    management3?: SpotlightItem;
    management4?: SpotlightItem;
    horizontal_banner?: Banner;
    horizontal_banne?: Banner;
  };
}

interface Props {
  data: SpotlightData;
}

const Spotlight: React.FC<Props> = ({ data }) => {
  if (!data || !data.spotlightSection) {
    return <div>No Spotlight data available</div>;
  }

  const { spotlightSection } = data;

  const bannerRaw =
    spotlightSection.horizontal_banner || spotlightSection.horizontal_banne;

  const banner = bannerRaw
    ? {
        name: bannerRaw.name || "Advertisement",
        description: bannerRaw.description || "Latest edition available",
        image: bannerRaw.web_image_url || bannerRaw.image,
        href: bannerRaw.redirect_url || "#",
        organization: bannerRaw.organization_name || "",
      }
    : null;

  return (
    <div className="overflow-x-hidden">
      {/* Container with 5% spacing */}
      <div className="mx-[4%] p-4 font-sans">
        {/* Header */}
        <div className="flex justify-between items-center w-full max-w-[1368px] mx-auto">
          <h2 className="text-xl md:text-2xl font-semibold bg-gray-300 px-6 py-1">
            Spotlight
          </h2>
          <a
            href="#"
            className="text-blue-800 font-bold hover:underline ml-4 text-sm md:text-base"
          >
            View More &gt;&gt;
          </a>
        </div>
        <hr className="my-0 border-gray-300 w-full max-w-[1368px] mx-auto" />

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-6 max-w-[1368px] mx-auto">
          {/* Plant Visit */}
          <div className="flex-1 ">
            <div className="bg-white rounded-none overflow-hidden shadow-sm">
              <img
                src={spotlightSection.plant_visit?.web_image_url}
                alt={spotlightSection.plant_visit?.title}
                className="w-[530px] h-[220px] md:h-[350px] object-cover rounded-none"
              />
              <div className="p-4">
                <span className="text-blue-600 text-sm md:text-base font-medium">
                  Plant Visit
                </span>
                <h3 className="text-lg md:text-xl font-bold mt-2 text-gray-800 w-[530px]">
                  {spotlightSection.plant_visit?.title}
                </h3>
                <p className="text-gray-500 text-xs md:text-sm mt-1 w-[530px]">
                  {spotlightSection.plant_visit?.published_by ||
                    "Chemical Today"}
                </p>
              </div>
            </div>
          </div>

          {/* Management Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
            {[spotlightSection.management1, spotlightSection.management2, spotlightSection.management3, spotlightSection.management4].map(
              (card, index) =>
                card && (
                  <div
                    key={index}
                    className="p-4 bg-white rounded-none shadow-sm"
                  >
                    <img
                      src={card.web_image_url}
                      alt={card.title}
                      className="w-[220px] h-[120px] object-cover bg-gray-100 rounded-none mb-0"


                    />
                    <span className="bg-blue-600 text-white text-xs md:text-sm font-medium px-2 py-1">
                      Management
                    </span>
                    <h4 className="text-sm md:text-base font-bold mt-1 text-gray-800">
                      {card.title}
                    </h4>
                    <p className="text-gray-500 text-xs md:text-sm mt-1">
                      {card.published_by || "Chemical Today"}
                    </p>
                  </div>
                )
            )}
          </div>
        </div>

        {/* Full Width Banner */}
        {banner && banner.image && (
          <div className=" w-[1368px] mx-0 mt-6 ml-0">
            <div className="bg-white rounded-none shadow-sm overflow-hidden">
              <a href={banner.href} target="_blank" rel="noopener noreferrer">
                <img
                  src={banner.image}
                  alt={banner.name}
                  className="w-[1368px] h-[115px]  mx-0 px-0"
                />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Spotlight;
