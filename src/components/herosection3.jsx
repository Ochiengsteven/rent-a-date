import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faUsers, faRocket } from '@fortawesome/free-solid-svg-icons';
import phonedate from "../assets/phonedate.jpg"

const HeroSection3 = () => {
  return (
    <section className="flex flex-col md:flex-row items-center py-12 px-6 md:px-12 ">
      {/* GIF Section */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <img
          src={phonedate}
          alt="Hero GIF"
          className="w-full h-auto object-cover rounded-lg "
        />
      </div>

      {/* Text and Icons Section */}
      <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Unlock Your Potential
        </h1>
        <p className="text-lg mb-6">
          Discover the ultimate solution for your productivity and collaboration needs. Transform the way you work and achieve your goals faster.
        </p>
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
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
    </section>
  );
};

export default HeroSection3;
