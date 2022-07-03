import React from "react";
import { Carousel } from "react-bootstrap";
import "./homeCarousel.styles.css";
import Slide1 from "./slide1.component";
import Slide2 from "./slide2.component";
import Slide3 from "./slide3.component";

const HomeCarousel = () => {
  return (
    <Carousel className="home-carousel" variant="dark">
      <Carousel.Item interval={3000}>
        <Slide1 />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <Slide2 />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <Slide3 />
      </Carousel.Item>
    </Carousel>
  );
};
export default HomeCarousel;
