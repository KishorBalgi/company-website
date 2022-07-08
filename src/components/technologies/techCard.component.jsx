import React from "react";
import { Col } from "react-bootstrap";

export default function TechCard(props) {
  return (
    <Col lg={2} md={4} sm={6} xs={6} className="tech-card">
      <img src={props.img} />
      <h4>{props.name}</h4>
      <p>{props.category.toUpperCase()}</p>
    </Col>
  );
}
