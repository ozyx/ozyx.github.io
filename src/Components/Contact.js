import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Contact extends Component {
  render() {
    return (
      <Container id="contact" className="section">
        <Row className="justify-content-md-center">
          <h3 className="section-header">Contact</h3>
        </Row>
      </Container>
    );
  }
}

export default Contact;
