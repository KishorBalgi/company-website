import React from "react";
import "./home.styles.css";
import HomeCarousel from "../../components/homeCarousel/homeCarousel.component";
import LogoSlider from "../../components/sliderLogos/sliderLogo.component";
import Services from "../../components/services/services.comp";
import Stats from "../../components/companyStat/stats.component";
import TechStack from "../../components/technologies/tech.component";
import Testimonials from "../../components/testimonials/testimonials.component";
import ContactUs from "../../components/contactUs/contactUs.component";

const Home = () => {
  return (
    <>
      <HomeCarousel />
      <LogoSlider />
      <Services />
      <Stats />
      <TechStack />
      <Testimonials />
      <ContactUs />
    </>
  );
};
export default Home;
