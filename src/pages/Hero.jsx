import { Avatar } from "antd";
import Nav from "../components/Nav";

const Hero = () => {
  return (
    <div>
      <Nav />
      <div className="px-8 w-screen">
        <div className="bg-[#F1FBFE] relative md:h-[50vh] rounded-[30px] px-16 pt-4 overflow-hidden">
          <div className="relative z-10 mt-14">
            <h1 className="text-6xl font-extrabold mb-5">
              Connect and interact
              <br />
              with your peers!
            </h1>
            <p>Where beautiful people fuel mutually beneficial relationships</p>
            <button className="bg-[#F461A4] border-white border-[2px] rounded-2xl px-4 py-2 mb-4 mt-8 text-white font-semibold">
              Get Started
            </button>
          </div>
          <svg
            className="absolute hidden md:block -right-1 -bottom-8"
            width="35%"
            height="260"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path
              d="M100 100 V 20 Q 80 0 60 10 Q 35 20 30 50 Q 25 80 0 90 L 0 100 Z"
              fill="white"
            />
          </svg>
          <div className="mt-12 flex mb-4">
            {[
              "https://sm.askmen.com/t/askmen_in/article/f/facebook-p/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.jpg",
              "https://i.pinimg.com/originals/05/04/59/050459739171c4ea021a5d44e1fc7823.jpg",
              "https://i.pinimg.com/originals/05/04/59/050459739171c4ea021a5d44e1fc7823.jpg",
              "https://i.pinimg.com/originals/05/04/59/050459739171c4ea021a5d44e1fc7823.jpg",
            ].map((src, index) => (
              <Avatar
                key={index}
                src={src}
                className={`w-[50px] h-[50px] border-2 border-white ${
                  index !== 0 ? "-ml-3" : ""
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
