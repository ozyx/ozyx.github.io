import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import asciicats from "../assets/asciicats.png";
import frenchtoast from "../assets/frenchtoast.png";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

class Projects extends Component {
  render() {
    return (
      <Container id="projects" className="section">
        <Row className="justify-content-md-center">
          <h3 className="section-header">Projects</h3>
        </Row>
        <Row lg={3}>
          <Col>
            <Card bg="light" text="dark" border="dark">
              <Card.Body>
                <Card.Img src={frenchtoast} />
                <Card.Title>
                  <b>frenchtoast.io</b>
                </Card.Title>
                <Card.Text>
                  A client-side kanban board app written using Angular 8.
                </Card.Text>
                <Card.Link href="https://github.com/ozyx/frenchtoast.io" >
                  <AiFillGithub size={32} />
                </Card.Link>
                <Card.Link target="_blank" href="https://frenchtoast.io">
                  <AiOutlineLink size={32} />
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card bg="light" text="dark" border="dark">
              <Card.Body>
                <Card.Img src={asciicats} />
                <Card.Title>
                  <b>ASCII Cats for VSCode</b>
                </Card.Title>
                <Card.Text>
                  A VSCode extension to add happy ASCII cats into your code!
                </Card.Text>
                <Card.Link
                  target="_blank"
                  href="https://github.com/ozyx/vscode-cat-ascii-faces"
                >
                  <AiFillGithub size={32} />
                </Card.Link>
                <Card.Link
                  target="_blank"
                  href="https://marketplace.visualstudio.com/items?itemName=jessemazzella.vscode-cat-ascii-faces"
                >
                  <AiOutlineLink size={32} />
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Projects;
