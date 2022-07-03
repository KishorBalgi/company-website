import React from "react";
import "./home.styles.css";
import HomeCarousel from "../../components/homeCarousel/homeCarousel.component";
import LogoSlider from "../../components/sliderLogos/sliderLogo.component";
import Services from "../../components/services/services.comp";

const Home = () => {
  return (
    <>
      <HomeCarousel />
      <LogoSlider />
      <Services />
    </>
  );
};
export default Home;
