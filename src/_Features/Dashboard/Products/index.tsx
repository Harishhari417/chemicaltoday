import React from "react";

interface Post {
  image: string;
  date: string;
  title: string;
  source: string;
  link?: string;
}

const samplePostsMain: Post[] = [
  {
    image:
      "https://new-chemical-today.s3.amazonaws.com/News/Univar_Solutions_and_BASF_Extend_Distribution_Deal_Covering_Polyurethane_and_Coatings_Inputs_20250819042737/Source:_Univar_Solutions..webp",
    date: "Aug 19, 2025",
    title:
      "Univar Solutions and BASF Extend Distribution Deal Covering Polyurethane and Coatings Inputs",
    source: "Chemical Today",
    link: "#",
  },
  {
    image:"https://new-chemical-today.s3.amazonaws.com/News/Marubeni_Expands_Pharma_Business_in_Africa_with_Phillips_Pharma_Investment_20250819055325/Exterior_view_of_Phillips_Pharma_Kenya_office._(Source:_Marubeni_Corporation).webp",
    date: "Aug 19, 2025",
    title:
      "Marubeni Expands Pharma Business in Africa with Phillips Pharma Investment",
    source: "Chemical Today",
    link: "#",
  },
  {
    image:"https://new-chemical-today.s3.amazonaws.com/News/Henkel_Launches_New_Hot_Melt_Adhesive_in_Germany_to_Boost_PET_Recycling_Efficiency_20250819085036/Technomelt_EM_335_RE,_a_hot_melt_adhesive_improving_PET_recycling_efficiency_and_flake_quality._.webp",
    date: "Aug 19, 2025",
    title:
      "Henkel Launches New Hot Melt Adhesive in Germany to Enhance Packaging Industry",
    source: "Chemical Today",
    link: "#",
  },
  {
    image:"https://new-chemical-today.s3.amazonaws.com/News/JSP_Selects_Primetals_Technologies_for_India%E2%80%99s_first_TIA-based_Plate_Mill_Upgrade_20250819095917/Source:_Primetals_Technologies..webp",
    date: "Aug 18, 2025",
    title: "Multi-City DRI Operation Leads to Seizure of Alprazolam",
    source: "Chemical Today",
    link: "#",
  },
];

const samplePostsAds: Post[] = [
  {
    image:"https://new-chemical-today.s3.amazonaws.com/advertisements/Nynas%20Ad/Nynas%20Ad/Nynas_banner_800x400_pix.jpg",
    date: "",
    title: "",
    source: "",
  },
  {
    image:"https://new-chemical-today.s3.amazonaws.com/advertisements/Sharplex/Sharplex/Website_Side_banner_Ad_World_of_chemical-1.png",
    date: "",
    title: "",
    source: "",
  },
  {
    image:"https://new-chemical-today.s3.amazonaws.com/advertisements/ENHESA%20Data%20Tech%20-%20Side%20Banner/ENHESA%20Data%20Tech%20-%20Side%20Banner/Website_banner_ad_800_240_1.jpeg",
    date: "",
    title: "",
    source: "",
  },
];

const Posts: React.FC = () => {
  const getAdLink = (index: number) => {
    if (index === 0) return "https://www.iccsustainabilityconclave.org/";
    if (index === 1) return "https://www.nynas.com/";
    if (index === 2)
      return "https://www.dcmshriram.com/our-businesses/chlor-vinyl-business";
    return "#";
  };

  return (
    <div className="h-auto ml-[5%] mr-[5%]">
      {/* Header Row with Line */}
      <div className="flex items-center justify-between border-b border-gray-300 mb-4 pb-1">
        <h1 className="text-xl font-semibold text-black bg-gray-300 px-10 py-1 w-fit">
          Posts
        </h1>
        <a href="#" className="text-blue-600 font-medium hover:underline">
          View more &gt;&gt;
        </a>
      </div>  

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-2 h-full">
        {/* Left Side */}
        <div className="lg:col-span-3 flex flex-col">
          <div className="grid grid-cols-2 gap-10 flex-1">
            {samplePostsMain.map((post, index) => (
              <a
                key={index}
                href={post.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-90"
              >
                <div>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-[200px]  object-fill"
                  />
                  <div>
                    <span
                      style={{ backgroundColor: "#085EAB" }}
                      className="text-white text-sm px-1 py-1"
                    >
                      {post.date}
                    </span>
                    <h2 className="text-md font-semibold mt-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 text-sm">{post.source}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

       {/* Right Side (Ads) */}
  <div className="lg:col-span-2 flex flex-col gap-4">
    {samplePostsAds.map((post, index) => (
      <div key={index} className="h-[220px] w-[500px] px-12 py-3 flex justify-center">
        <a
          href={getAdLink(index)}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          
        </a>
      </div>
    ))}
  </div>
</div>

      {/* OUR KNOWLEDGE PARTNER Section */}
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
            className="object-fill w-full cursor-pointer"
          />
        </a>
      </div>
    </div>
  );
};

export default Posts;