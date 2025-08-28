import React from "react";

const TopSection: React.FC = () => {
  // Define the news items that will scroll in the ticker
  const newsItems: string[] = [
    "Testa Analytical Launches New System",
    "PPG Marks 3,000th Moonwalk Paint Mixing System Installation in U.S.",
    "AbbVie to Invest $195M in U.S. API Manufacturing Expansion",
    "Arkema and Haffon for Local Textile Innovation in China",
    // Duplicate items for smooth scrolling
    "Testa Analytical Launches New System",
    "PPG Marks 3,000th Moonwalk Paint Mixing System Installation in U.S.",
    "AbbVie to Invest $195M in U.S. API Manufacturing Expansion",
    "Arkema and Haffon for Local Textile Innovation in China",
  ];

  // Inline SVGs
  const ChevronRightIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path
        fillRule="evenodd"
        d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
        clipRule="evenodd"
      />
    </svg>
  );

  const RedCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" className={`${className} animate-pulse-glow`}>
      <circle cx="12" cy="12" r="10" />
    </svg>
  );

  const SearchIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path
        fillRule="evenodd"
        d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 4.755l4.39 4.39a.75.75 0 1 1-1.06 1.06l-4.39-4.39A8.25 8.25 0 0 1 2.25 10.5Z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <div className="overflow-x-hidden">
 

    <div className="flex flex-col bg-white border-b border-gray-300 font-sans my-0">
      {/* --- TOP SECTION --- */}
      <div className="flex items-center justify-between px-[100px] pt-[30px] pb-[60px] mb-[0px]">
        {/* Left Section: Logo */}
        <div className="flex items-center">
          <img src="/images/logo4.svg" alt="Logo" className="mt-[5%]  h-[120px] w-[285px]" />
        </div>

        {/* Banner */}
        <a
          href="https://www.rockwellautomation.com/en-in/capabilities/process-solutions/process-systems/campaign-process-power.html"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <img
            src="/images/Banner.jpg"
            alt="Rockwell Banner"
            className="mt-[px]  h-[70px] ml-[30px] w-[420px] object-contain"
          />
        </a>

        {/* Magazine Section */}
        <div className="flex items-center gap-[15px] max-w-[450px]">
          <img
            src="/images/magazine.webp"
            alt="Magazine Cover"
            className="ml-[20px] h-[170px] w-[132px] mb-[0px] pt-[30px] pr-[30px]"
          />

          <div className="flex items-start gap-6">
            <div className="flex flex-col items-start">
              <p className="w-[128px] text-[12.8px] mb-[0px] mt-[8px] pt-[20px] pr-[20px] pb-[5px] font-helvetica font-bold leading-[1.6] tracking-[0.3px]">
                The Chemical <br /> Equation Behind <br /> India’s Textile <br /> Transition
              </p>
              <button className="mt-[10px] px-[15px] py-[6px] text-[13px] mb-[0px] font-helvetica font-bold text-black border border-black hover:text-blue-600 flex items-center gap-2">
                Read Here <span>→</span>
              </button>
            </div>

            <div className="flex flex-col gap-3">
              <button className="h-[33px] w-[148px] mt-[20px] text-[12.8px] font-bold text-black border border-black hover:text-blue-600">
                Advertise With Us
              </button>
              <button className="h-[33px] w-[148px] text-[12.8px] font-bold text-black border border-black hover:text-blue-600">
                Magazine Subscription
              </button>
              <button className="h-[33px] w-[148px] pb-[0px] text-[12.8px] font-bold text-black border border-black hover:text-blue-600">
                Chemical Today TV
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ================= Highlights + News Ticker ================= */}
      <div className="bg-white flex items-stretch border-t border-blue-500 relative mt-[0px] mb-[0px]">
        {/* Highlights label */}
        <div
          className="bg-[#DDDDDD] text-blue-800 py-0 pl-40 pr-10 flex items-center justify-end space-x-2 flex-shrink-0 z-10 shadow-md"
          style={{ clipPath: "polygon(0% 0%, 95% 0%, 100% 100%, 0% 100%)" }}
        >
          <RedCircleIcon className="w-4 h-4" />
          <span className="font-semibold text-lg whitespace-nowrap">Highlights</span>
        </div>

        {/* News Ticker */}
        <main className="flex-grow bg-white text-gray-900 py-3 px-8 overflow-hidden relative">
          <style>
            {`
              @keyframes marquee {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); }
              }
              .animate-marquee {
                animation: marquee 15s linear infinite;
                width: max-content;
              }
              @keyframes pulse-glow {
                25% { filter: drop-shadow(0 0 2px rgba(255, 0, 0, 0.4)); }
                50% { filter: drop-shadow(0 0 6px rgba(255, 0, 0, 0.7)); }
                100% { filter: drop-shadow(0 0 2px rgba(255, 0, 0, 0.4)); }
              }
              .animate-pulse-glow {
                animation: pulse-glow 2s infinite alternate;
              }
            `}
          </style>

          <div className="flex items-center space-x-6 animate-marquee text-lg">
            {newsItems.map((item, index) => (
              <React.Fragment key={index}>
                <span className="flex-shrink-0">{item}</span>
                <ChevronRightIcon className="w-4 h-4 text-gray-700" />
              </React.Fragment>
            ))}
          </div>
        </main>
      </div>

      {/* ================= Navigation Bar ================= */}
      <nav className="bg-blue-600 text-white py-3 px-8 flex justify-between items-center  overflow-x-auto whitespace-nowrap">
        <div className="flex flex-grow justify-center space-x-10  ml-20 text-lg font-semibold">
          <a href="#" className="hover:text-blue-200">Posts</a>
          <a href="#" className="hover:text-blue-200">Sectors</a>
          <a href="#" className="hover:text-blue-200">Insights</a>
          <a href="#" className="hover:text-blue-200">Spotlight</a>
          <a href="#" className="hover:text-blue-200">Product</a>
          <a href="#" className="hover:text-blue-200">Events</a>
          <a href="#" className="hover:text-blue-200">Equipment</a>
          <a href="#" className="hover:text-blue-200">Sustainability</a>
          <a href="#" className="hover:text-blue-200">Digitalization</a>
          <SearchIcon className="w-6 h-6 text-white mr-20 " />
        </div>
        
      </nav>
    </div>
    </div>
  );
};

export default TopSection;
