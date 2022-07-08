import React from "react";
import { connect } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

const ServiceCard = (props) => {
  return (
    <Card className="service-card">
      <Card.Body>
        <div className="service-card-header">
          <FontAwesomeIcon icon={faLaptopCode} />
          <Card.Title>Card Title</Card.Title>
        </div>

        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button>Read More</Button>
      </Card.Body>
    </Card>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ServiceCard);
