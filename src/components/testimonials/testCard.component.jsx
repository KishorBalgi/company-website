import React from "react";
import { Container } from "react-bootstrap";

export default function TestimonialCard(props) {
  return (
    <Container className="testimonial-card">
      {console.log(props)}
      <img src={props.image} alt="" />
      <p>"{props.testimonial}"</p>
      <p>- {props.author}</p>
    </Container>
  );
}
