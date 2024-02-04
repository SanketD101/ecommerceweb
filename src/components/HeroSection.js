import React from "react";
import shopImg from "../assets/shop.png";
import { Link } from "react-router-dom";

const HeroSection = (props) => {
  return (
    <div className="hero-section">
      <div className="hero-sec-info">
        <div>
          <p>Welcome to</p>
          <h3>{props.htitle}</h3>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
            blanditiis iure! Omnis recusandae animi vel, accusantium
            consequuntur beatae distinctio sequi.
          </span>
          <Link to="/products">
            <button>Shop Now</button>
          </Link>
        </div>
      </div>
      <div className="hero-ser-img">
        <img src={shopImg} alt="img" />
      </div>
    </div>
  );
};

export default HeroSection;
