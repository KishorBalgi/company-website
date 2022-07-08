import React, { useState } from "react";
import "./tech.styles.css";
import { connect } from "react-redux";
import { Nav, Row, Col, Container } from "react-bootstrap";
import TechCard from "./techCard.component";
import nodejs from "../../assets/icons/nodejs.png";
import react from "../../assets/icons/react.png";
import mongoDB from "../../assets/icons/mongoDB.png";
import css from "../../assets/icons/css.png";
import html from "../../assets/icons/html.png";
import java from "../../assets/icons/java.png";
import angular from "../../assets/icons/angular.png";
import php from "../../assets/icons/php.png";
import sass from "../../assets/icons/sass.png";
import swift from "../../assets/icons/swift.png";

const techStacks = [
  {
    name: "Node JS",
    category: "backend",
    img: nodejs,
  },
  {
    name: "React JS",
    category: "frontend",
    img: react,
  },
  {
    name: "MongoDB",
    category: "database",
    img: mongoDB,
  },
  {
    name: "HTML",
    category: "frontend",
    img: html,
  },
  {
    name: "CSS",
    category: "frontend",
    img: css,
  },
  {
    name: "Java",
    category: "mobile",
    img: java,
  },
  {
    name: "Angular",
    category: "frontend",
    img: angular,
  },
  {
    name: "PHP",
    category: "backend",
    img: php,
  },
  {
    name: "SASS",
    category: "frontend",
    img: sass,
  },
  {
    name: "Swift",
    category: "mobile",
    img: swift,
  },
];

const TechStack = (props) => {
  const [activeTab, setActiveTab] = useState("all");
  return (
    <section id="tech-stack">
      <h1>Technologies We Use</h1>
      <Nav variant="pills" defaultActiveKey="all">
        <Nav.Item onClick={() => setActiveTab("all")}>
          <Nav.Link eventKey="all">All</Nav.Link>
        </Nav.Item>
        <Nav.Item onClick={() => setActiveTab("frontend")}>
          <Nav.Link eventKey="frontend">FrontEnd JS</Nav.Link>
        </Nav.Item>
        <Nav.Item onClick={() => setActiveTab("backend")}>
          <Nav.Link eventKey="backend">BackEnd JS</Nav.Link>
        </Nav.Item>
        <Nav.Item onClick={() => setActiveTab("mobile")}>
          <Nav.Link eventKey="mobile">Mobile</Nav.Link>
        </Nav.Item>
        <Nav.Item onClick={() => setActiveTab("database")}>
          <Nav.Link eventKey="database">Database</Nav.Link>
        </Nav.Item>
      </Nav>
      <div className="tech-display">
        {activeTab === "all" ? (
          <Container className="tech-grid">
            <Row>
              {techStacks.map((tech) => (
                <TechCard key={tech.name} {...tech} />
              ))}
            </Row>
          </Container>
        ) : null}

        {activeTab === "frontend" ? (
          <Container className="tech-grid">
            <Row>
              {techStacks.map((tech) => {
                if (tech.category === "frontend") {
                  return <TechCard key={tech.name} {...tech} />;
                }
              })}
            </Row>
          </Container>
        ) : null}

        {activeTab === "backend" ? (
          <Container className="tech-grid">
            <Row>
              {techStacks.map((tech) => {
                if (tech.category === "backend") {
                  return <TechCard key={tech.name} {...tech} />;
                }
              })}
            </Row>
          </Container>
        ) : null}

        {activeTab === "mobile" ? (
          <Container className="tech-grid">
            <Row>
              {techStacks.map((tech) => {
                if (tech.category === "mobile") {
                  return <TechCard key={tech.name} {...tech} />;
                }
              })}
            </Row>
          </Container>
        ) : null}

        {activeTab === "database" ? (
          <Container className="tech-grid">
            <Row>
              {techStacks.map((tech) => {
                if (tech.category === "database") {
                  return <TechCard key={tech.name} {...tech} />;
                }
              })}
            </Row>
          </Container>
        ) : null}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TechStack);
