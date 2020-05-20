import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

import jesse from "../assets/jesse.png";

class Title extends Component {
  render() {
    return (
      <Container className="title-container">
        <Row>
          <Image className="App-image" src={jesse} roundedCircle></Image>
        </Row>
        <Row>
          <h1>Jesse Mazzella</h1>
        </Row>
        <Row>
          <h4>Software Engineer</h4>
        </Row>
        <Row>
          <Button
            target="_blank"
            href="https://github.com/ozyx/"
            variant="link"
          >
            <h1>
              <AiFillGithub />
            </h1>
          </Button>
          <Button
            target="_blank"
            href="https://www.linkedin.com/in/jesse-mazzella-a28a22116/"
            variant="link"
          >
            <h1>
              <AiFillLinkedin />
            </h1>
          </Button>
          <Button href="mailto:jessemazzella@gmail.com" variant="link">
            <h1>
              <AiFillMail />
            </h1>
          </Button>
        </Row>
        <Row>
          <Button target="_blank" href="https://drive.google.com/file/d/1fHXJ5ZKy6qurpZ70DD_AoIvjDOEoRRY8/view?usp=sharing" variant="dark"><b>Download My CV</b></Button>
        </Row>
      </Container>
    );
  }
}

export default Title;
