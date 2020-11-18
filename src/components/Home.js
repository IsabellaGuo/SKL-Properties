import React from "react";
import { Link } from "react-router-dom";
import "../components/Home.css";

function Home() {
  return (
    <div className="home__main">
      {/* Logo on the left hand side */}
      <div className="home__left">
        <img className="bigLogo" src={'/assets/skl_logo.png'} alt="sklLogo" />
      </div>
      {/* header */}
      <div className="home__right">
        <div className="home__nav">
          <Link to="/" className="home__link">
            <span>Home</span>
          </Link>

          <Link to="/about" className="home__link">
            <span>About Me</span>
          </Link>

          <Link to="/properties" className="home__link">
            <span>Properties</span>
          </Link>

          <Link to="/contact" className="home__link">
            <span>Contact Me</span>
          </Link>
        </div>
        {/* welcome message or slogan */}
        <div className="home__welcome">
          <h2>welcome</h2>
          <p className="home__welcomeText">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Eget parturient
            senectus commodo litora dolor taciti augue.consectetuer adipiscing elit. Eget parturient
            senectus commodo litora dolor taciti augue.
          </p>
        </div>
        {/* contact info */}
        <div className="home__contact">
          <span>sklproperties@shaw.ca</span>
          <span>250-889-0797</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
