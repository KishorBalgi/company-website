import React from "react";
import "./stats.styles.css";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiagramProject,
  faUsers,
  faUserTie,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

const Stats = (props) => {
  return (
    <section id="stats">
      <Container>
        <Row>
          <Col lg={3}>
            <div className="stats-card">
              <FontAwesomeIcon icon={faDiagramProject} />
              <h2>10+</h2>
              <p>NO OF PROJECTS</p>
            </div>
          </Col>
          <Col lg={3}>
            <div className="stats-card">
              <FontAwesomeIcon icon={faUsers} />
              <h2>5+</h2>
              <p>NO OF CLIENTS</p>
            </div>
          </Col>
          <Col lg={3}>
            <div className="stats-card">
              <FontAwesomeIcon icon={faUserTie} />
              <h2>50+</h2>
              <p>NO OF EMPLOYEE</p>
            </div>
          </Col>
          <Col lg={3}>
            <div className="stats-card">
              <FontAwesomeIcon icon={faCode} />
              <h2>10K+</h2>
              <p>HOURS OF CODING</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Stats);
