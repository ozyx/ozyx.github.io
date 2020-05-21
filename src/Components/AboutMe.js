import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import mechanique from "../assets/mechanique.jpg";

class AboutMe extends Component {
  render() {
    return (
      <div className="about-me-contents">
        <Container id="about-me" className="section">
          <Row className="justify-content-center">
            <h3 className="section-header">About Me</h3>
          </Row>
          <Row>
            <Col>
              <Image src={mechanique} fluid rounded></Image>
            </Col>
            <Col>
              Hi! My name is Jesse Mazzella and I'm a Software Engineer. In 2020, I earned my Bachelor of Science degree in Computer Science from California State University, Fullerton, with a focus in Software Engineering. 
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default AboutMe;
