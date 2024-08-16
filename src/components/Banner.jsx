import React from 'react';

const Banner = () => {
  return (
    <div className='container mx-auto px-4 my-8'>
      <div className="bg-gradient-to-r from-red-400 to-red-800 text-white py-10 px-6 md:px-12 shadow-2xl rounded-2xl flex flex-col lg:flex-row items-center justify-between">
        <div className="text-center lg:text-left mb-8 lg:mb-0 w-full lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">Are you ready</h2>
          <p className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold">to start Right now!</p>
        </div>
        <div className='flex flex-col sm:flex-row gap-4 w-full lg:w-auto'>
          <button
            className="w-full sm:w-auto bg-white text-red-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-red-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            onClick={() => console.log('Learn More clicked!')}
          >
            Learn More
          </button>
          <button
            className="w-full sm:w-auto bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-red-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            onClick={() => console.log('Get Started clicked!')}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;