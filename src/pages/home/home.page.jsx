import React from "react";
import "./home.styles.css";
import HomeCarousel from "../../components/homeCarousel/homeCarousel.component";
import LogoSlider from "../../components/sliderLogos/sliderLogo.component";
import Services from "../../components/services/services.comp";
import Stats from "../../components/companyStat/stats.component";
import TechStack from "../../components/technologies/tech.component";

const Home = () => {
  return (
    <>
      <HomeCarousel />
      <LogoSlider />
      <Services />
      <Stats />
      <TechStack />
    </>
  );
};
export default Home;
