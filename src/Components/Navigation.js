import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, animateScroll as scroll } from "react-scroll";

class Navigation extends Component {
  render() {
    return (
        <Navbar className="topnav" fixed="top" bg="dark" variant="dark" expand="md">
          <Navbar.Brand>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Jesse Mazzella
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <Link
                  activeClass="active"
                  to="about-me"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  About Me
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  activeClass="active"
                  to="experience"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Experience
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Projects
                </Link>
              </Nav.Link>
              {/* <Nav.Link>
                <Link
                  activeClass="active"
                  to="hobbies"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Hobbies
                </Link>
              </Nav.Link> */}
              {/* <Nav.Link>
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Contact
                </Link>
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default Navigation;