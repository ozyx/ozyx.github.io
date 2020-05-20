import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

class Hobbies extends Component {
  render() {
    return (
      <Container id="hobbies" className="section">
        <Row className="justify-content-md-center">
          <h3 className="section-header">Hobbies</h3>
        </Row>
        <Row>
          <Col>
            <Card>
              {/* <Card.Img variant="top" src={temp} /> */}
              <Card.Body>
                <Card.Title>Project 1</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              {/* <Card.Img variant="top" src={temp} /> */}
              <Card.Body>
                <Card.Title>Project 2</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              {/* <Card.Img variant="top" src={temp} /> */}
              <Card.Body>
                <Card.Title>Project 3</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Hobbies;
