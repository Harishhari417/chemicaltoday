import React from 'react';
import { DashboardData } from '../services/dashboardService';

interface DigitalizationProps {
  data: DashboardData | null;
}

const Digitalization: React.FC<DigitalizationProps> = ({ data }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Section */}
      <div className="flex-1 flex items-center justify-center bg-gradient-to-r from-teal-500 to-teal-600 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Digitalization</h1>
          <p className="text-xl">Dashboard Digitalization Component</p>
        </div>
      </div>

      {/* ---------- Footer ---------- */}
      <footer className="bg-[#e9eff7] py-0 px-4 sm:px-6 lg:px-8 font-['Inter']">
        <div className="max-w-auto mx-auto">
          {/* Newsletter Section */}
          <div className="flex justify-between mb-12 mr-[40px]">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#014187] mt-[30px] ml-10 ">
                Subscribe to our Newsletter
              </h2>
              <p className="text-gray-700 text-base ml-10">
                Stay updated with the latest chemical industry trends and innovations.
              </p>
            </div>
            <button className="bg-blue-600 text-white h-8 font-semibold py-1 px-6 mt-[30px] rounded shadow-md transition duration-300 ease-in-out">
              Subscribe
            </button>
          </div>

          {/* Main Footer Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-0">
            {/* About Section */}
            <div>
              <h3 className="font-semibold text-[#014187] mb-4 ml-10">About</h3>
              <ul>
                <li className="mb-2">
                  <a href="#" className="text-gray-700 hover:text-[#014187] ml-10">
                    About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-700 hover:text-[#014187] ml-10">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Useful Links */}
            <div>
              <h3 className="font-semibold text-[#014187] mb-4">Useful Links</h3>
              <ul>
                <li className="mb-2">
                  <a href="#" className="text-gray-700 hover:text-[#014187]">
                    Chem Square
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-700 hover:text-[#014187]">
                    Media Kit
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-700 hover:text-[#014187]">
                    World Of Chemicals
                  </a>
                </li>
              </ul>
            </div>

            {/* Our Brands */}
            <div>
              <h3 className="font-semibold text-[#014187] mb-4">Our Brands</h3>
              <ul>
                <li className="mb-2">
                  <a href="#" className="text-gray-700 hover:text-[#000000]">
                    Chemical Today TV
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-700 hover:text-[#000000]">
                    E-Magazines
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-700 hover:text-[#000000]">
                    Newsletters
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-700 hover:text-[#000000]">
                    Compact Edition
                  </a>
                </li>
              </ul>
            </div>

            {/* Privacy & Terms */}
            <div>
              <h3 className="font-semibold text-[#014187] mb-4">Privacy & Terms</h3>
              <ul>
                <li className="mb-2">
                  <a href="#" className="text-gray-700 hover:text-[#000000]">
                    Terms And Conditions
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-700 hover:text-[#000000]">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Others */}
            <div>
              <h3 className="font-semibold text-[#014187] mb-4">Others</h3>
              <ul>
                <li className="mb-2">
                  <a href="#" className="text-gray-700 hover:text-[#000000]">
                    Articles
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-700 hover:text-[#014187]">
                    Logistics
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-700 hover:text-[#014187]">
                    Inhouse Articles
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-700 hover:text-[#014187]">
                    Safety
                  </a>
                </li>
              </ul>
            </div>

            {/* Logo & Social */}
            <div className="lg:col-span-1 lg:col-start-6 flex flex-col items-center ">
              <img src="/images/logo4.svg" alt="Chemical Today Logo" className="mb-4" />

              <div className="flex space-x-4 mb-4">
                {/* X (Twitter) */}
                <a href="#" aria-label="X (formerly Twitter)" className="text-black hover:text-[#014187]">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.901 1.153h3.684l-8.026 9.252l9.259 10.66H17.86l-7.076-8.15L3.924 22.08H.24L9.07 11.758L.785 1.153h3.811l5.57 7.7L15.353 1.153h3.548zM16.92 19.866h2.24L6.082 3.2H3.77L16.92 19.866z" />
                  </svg>
                </a>
                {/* YouTube */}
                <a href="#" aria-label="YouTube" className="text-red-600 hover:text-[#014187]">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21.58 7.042c-.256-1.026-.81-1.93-1.615-2.735C18.49 3.535 17.585 2.98 16.56 2.724 14.88 2.25 12 2.25 12 2.25s-2.88 0-4.56.474C6.415 2.98 5.51 3.535 4.705 4.307c-.805.805-1.359 1.709-1.615 2.735C2.5 8.72 2.5 12 2.5 12s0 3.28.474 4.958c.256 1.026.81 1.93 1.615 2.735c.805.805 1.709 1.359 2.735 1.615C9.12 21.75 12 21.75 12 21.75s2.88 0 4.56-.474c1.026-.256 1.93-.81 2.735-1.615c.805-.805 1.359-1.709 1.615-2.735C21.5 15.28 21.5 12 21.5 12s0-3.28-.474-4.958zM10 15.5v-7l6.5 3.5-6.5 3.5z" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a href="#" aria-label="LinkedIn" className="text-blue-700 hover:text-[#014187]">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.23 0H1.77C.79 0 0 .79 0 1.77v20.46c0 .98.79 1.77 1.77 1.77h20.46c.98 0 1.77-.79 1.77-1.77V1.77c0-.98-.79-1.77-1.77-1.77zM7.15 20.46H3.6V9.06h3.55v11.4zM5.38 7.5c-1.2 0-2.18-.98-2.18-2.18s.98-2.18 2.18-2.18c1.2 0 2.18.98 2.18 2.18S6.58 7.5 5.38 7.5zM20.46 20.46h-3.55v-5.6c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.96v5.69h-3.55V9.06h3.41v1.56h.05c.47-.9 1.62-1.86 3.36-1.86 3.6 0 4.26 2.37 4.26 5.45v6.25z" />
                  </svg>
                </a>
              </div>
              <p className="text-gray-600 text-sm">
                Copyright © 2024 Chemical Today
              </p>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="text-gray-600 text-sm mt-8">
            <span className="font-semibold">Disclaimer:</span> We strive for
            accuracy, but errors may occur. We are more than willing to correct any
            errors or omissions upon notification.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Digitalization;
