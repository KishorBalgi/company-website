import React from "react";
import "./services.styles.css";
import { Col, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import ServiceCard from "./services.card";

const Services = (props) => {
  return (
    <section id="services">
      <h1>Services</h1>
      <p></p>
      <Container>
        <Row>
          <Col lg={6}>
            <ServiceCard />
          </Col>
          <Col lg={6}>
            <ServiceCard />
          </Col>
          <Col lg={6}>
            <ServiceCard />
          </Col>
          <Col lg={6}>
            <ServiceCard />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Services);
