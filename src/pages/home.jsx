import { useEffect } from "react";
import { HeartOutlined, SafetyOutlined, StarOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCompanionImage } from "../redux/reducers/companionsSlice";

const Home = () => {
  const companions = useSelector((state) => state.companions.companions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCompanionImage());
    dispatch(fetchCompanionImage());
  }, [dispatch]);

  return (
    <div>
      {/* Header */}
      <header>
        <h1>Discover Your Perfect Valentine</h1>
        <p>Find someone special to make your day unforgettable!</p>
        <Link to="/get-started">
          <button>Get Started</button>
        </Link>
      </header>

      {/* Featured Companions Section */}
      <section>
        {companions.map((companion) => (
          <div key={companion.id}>
            <img src={companion.imageSrc} alt={`Companion ${companion.id}`} />
            <p>
              Fun-loving adventurer with a passion for creating memorable
              moments.
            </p>
            <div>
              <HeartOutlined />
              <SafetyOutlined />
              <StarOutlined />
            </div>
          </div>
        ))}
      </section>

      {/* Benefits Section */}
      <section>
        <h2>Why Choose Us?</h2>
        <div>
          {/* Benefit 1 */}
          <div>
            <HeartOutlined />
            <h3>Diverse Companions</h3>
            <p>
              Choose from a variety of companions with different interests and
              playful personalities.
            </p>
          </div>

          {/* Benefit 2 */}
          <div>
            <SafetyOutlined />
            <h3>Safe and Secure</h3>
            <p>
              Our platform ensures a secure and playful experience for everyone
              involved.
            </p>
          </div>

          {/* Benefit 3 */}
          <div>
            <StarOutlined />
            <h3>Unforgettable Moments</h3>
            <p>
              Create memories that last a lifetime with our carefully selected
              and playful companions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
