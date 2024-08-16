import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faUsers, faRocket } from '@fortawesome/free-solid-svg-icons';
import phonedate2 from "../assets/phonedate2.svg"

const HeroSection4 = () => {
  return (
    <section className="flex flex-col md:flex-row items-center py-12 px-6 md:px-12 bg-gray-100">
      {/* Text and Icons Section */}
      <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Unlock Your Potential
        </h1>
        <p className="text-lg mb-6">
          Discover the ultimate solution for your productivity and collaboration needs. Transform the way you work and achieve your goals faster.
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          {/* Icon 1 */}
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faDownload} className="text-blue-500 text-3xl" />
            <span className="text-lg">Easy to Download</span>
          </div>

          {/* Icon 2 */}
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faUsers} className="text-green-500 text-3xl" />
            <span className="text-lg">Collaborate Seamlessly</span>
          </div>

          {/* Icon 3 */}
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faRocket} className="text-red-500 text-3xl" />
            <span className="text-lg">Boost Your Productivity</span>
          </div>
        </div>
      </div>

      {/* GIF Section */}
      <div className="md:w-1/2">
        <img
          src={phonedate2}
          alt="Hero GIF"
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection4;
