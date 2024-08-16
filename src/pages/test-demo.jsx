import { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Home = () => {
  const [companions, setCompanions] = useState([]);

  useEffect(() => {
    const fetchCompanionImages = async () => {
      try {
        const response = await axios.get('https://source.unsplash.com/featured/?people');
        const imageSrc = response.request.responseURL;
        setCompanions((prevCompanions) => [...prevCompanions, { id: Date.now(), imageSrc }]);
      } catch (error) {
        console.error('Error fetching companion image:', error);
      }
    };

    fetchCompanionImages();
    fetchCompanionImages();
  }, []);

  return (
    <div className="bg-gradient-to-r from-red-500 to-pink-600 min-h-screen flex flex-col items-center justify-between font-poppins">
      {/* Header */}
      <div className="text-white text-center py-4">
        <h1 className="text-4xl font-bold mb-2">Find Your Match</h1>
        <p className="text-lg mb-4">Swipe right to like, left to pass!</p>
        <Link to="/register">
          <button className="bg-white text-pink-500 hover:bg-pink-100 py-2 px-6 rounded-full font-bold">
            Get Started
          </button>
        </Link>
      </div>

      {/* Swipe Cards */}
      <div className="relative w-full flex justify-center mb-12">
        {companions.length > 0 && companions.map((companion, index) => (
          <div
            key={companion.id}
            className={`absolute transition-transform transform ${index === 0 ? 'z-10' : 'z-0'} bg-white rounded-lg shadow-lg w-80 max-w-xs`}
          >
            <img
              className="w-full h-60 rounded-t-lg object-cover"
              src={companion.imageSrc}
              alt={`Companion ${companion.id}`}
            />
            <div className="p-4">
              <p className="text-gray-800 mb-2">Fun-loving adventurer with a passion for creating memorable moments.</p>
            </div>
          </div>
        ))}
      </div>

      {/* Swipe Actions */}
      <div className="flex justify-between w-full px-4 mb-8">
        <button className="bg-red-500 p-4 rounded-full shadow-lg text-white">
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <button className="bg-green-500 p-4 rounded-full shadow-lg text-white">
          <FontAwesomeIcon icon={faHeart} />
        </button>
      </div>

      {/* Footer */}
      <div className="text-white text-center mb-4">
        <h2 className="text-2xl font-bold mb-2">Why Choose Us?</h2>
        <div className="flex justify-center flex-wrap">
          {/* Benefit 1 */}
          <div className="bg-white p-4 rounded-lg shadow-md max-w-xs mx-2 my-2">
            <h3 className="text-lg font-bold mb-1">Diverse Companions</h3>
            <p className="text-gray-600">
              Choose from a variety of companions with different interests and playful personalities.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="bg-white p-4 rounded-lg shadow-md max-w-xs mx-2 my-2">
            <h3 className="text-lg font-bold mb-1">Safe and Secure</h3>
            <p className="text-gray-600">
              Our platform ensures a secure and playful experience for everyone involved.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="bg-white p-4 rounded-lg shadow-md max-w-xs mx-2 my-2">
            <h3 className="text-lg font-bold mb-1">Unforgettable Moments</h3>
            <p className="text-gray-600">
              Create memories that last a lifetime with our carefully selected and playful companions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
