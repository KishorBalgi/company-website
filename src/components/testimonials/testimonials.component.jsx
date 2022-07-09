import React from "react";
import "./testimonials.styles.css";
import { connect } from "react-redux";
import Slider from "react-slick";
import TestimonialCard from "./testCard.component";
import react from "../../assets/icons/react.png";
import nodejs from "../../assets/icons/nodejs.png";
import angular from "../../assets/icons/angular.png";

const testimonials = [
  {
    image: react,
    author: "Kishor Balgi",
    testimonial:
      "A testimonial is a statement from a past customer that describes how a product or service helped them. Testimonials are often written by the business based on specific questions they ask satisfied customers. They usually show impact through before-and-after comparisons or provide specific improvement statistics.",
  },
  {
    image: angular,
    author: "David Luther",
    testimonial:
      "A testimonial is a statement from a past customer that describes how a product or service helped them. Testimonials are often written by the business based on specific questions they ask satisfied customers. They usually show impact through before-and-after comparisons or provide specific improvement statistics.",
  },
  {
    image: nodejs,
    author: "Patrick Bateman",
    testimonial:
      "A testimonial is a statement from a past customer that describes how a product or service helped them. Testimonials are often written by the business based on specific questions they ask satisfied customers. They usually show impact through before-and-after comparisons or provide specific improvement statistics.",
  },
];
const Testimonials = (props) => {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  };
  return (
    <section id="testimonials">
      <h1>Testimonials</h1>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div>
            {console.log(testimonial)}
            <TestimonialCard {...testimonial} key={testimonial.author} />
          </div>
        ))}
      </Slider>
    </section>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Testimonials);
