import React from "react";
import "./sliderLogo.styles.css";
import Slider from "react-slick";
import brand from "../../assets/brand.png";

function LogoSlider() {
  const settings = {
    infinite: true,
    autoplay: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
  };
  return (
    <Slider {...settings} className="logo-slider">
      <div>
        <img src={brand} alt="" srcset="" />
      </div>
      <div>
        <img src={brand} alt="" srcset="" />
      </div>
      <div>
        <img src={brand} alt="" srcset="" />
      </div>
      <div>
        <img src={brand} alt="" srcset="" />
      </div>
      <div>
        <img src={brand} alt="" srcset="" />
      </div>
      <div>
        <img src={brand} alt="" srcset="" />
      </div>
      <div>
        <img src={brand} alt="" srcset="" />
      </div>
    </Slider>
  );
}
export default LogoSlider;
