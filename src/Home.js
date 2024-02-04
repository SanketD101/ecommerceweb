import React from "react";
import HeroSection from "./components/HeroSection";

function Home(props) {
  return (
    <>
      <HeroSection htitle={props.htitle} />
    </>
  );
}

export default Home;
