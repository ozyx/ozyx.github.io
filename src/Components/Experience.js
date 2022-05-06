import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import Media from "react-bootstrap/Media";

import acm from "../assets/acm.jpg";
import aveva from "../assets/aveva.jpg";
import schneider from "../assets/schneider.png";

class Experience extends Component {
  render() {
    return (
      // <Container id="experience" className="section">
      //   <Row className="justify-content-center">
      //     <h3 className="section-header">Experience</h3>
      //   </Row>
      //   <Row>
      //     <Media className="experience-item">
      //       <img
      //         width={64}
      //         height={64}
      //         className="mr-3"
      //         src={aveva}
      //         alt="AVEVA"
      //       />
      //       <Media.Body>
      //         <h5>
      //           <b>AVEVA</b>
      //         </h5>
      //         <h4>Junior Developer - SimCentral R&D</h4>
      //         <ul>
      //           <li>
      //             Implemented continuous API testing using TypeScript, Mocha
      //             test framework and Microsoft TFS, completing the "Testing
      //             Pyramid" for SimCentral.
      //           </li>
      //           <li>
      //             Optimized API testing framework by redesigning an open source
      //             Test Adapter (Microsoft NodeJS Tools for Visual Studio),
      //             decreasing testing time by 70%.
      //           </li>
      //           <li>Implemented customer-facing features using C# and WPF</li>
      //         </ul>
      //       </Media.Body>
      //     </Media>
      //   </Row>
      //   <Row>
      //     <Media className="experience-item">
      //       <img
      //         width={64}
      //         height={64}
      //         className="mr-3"
      //         src={schneider}
      //         alt="Schneider Electric Software"
      //       />
      //       <Media.Body>
      //         <h5>
      //           <b>Schneider Electric Software</b>
      //         </h5>
      //         <h4>Software Development Intern - SimCentral R&D</h4>
      //         <ul>
      //           <li>
      //             Developed PowerShell script to enable SimCentral to be
      //             launched and debugged without installation, allowing for API
      //             testing in the build environment (TFS).
      //           </li>
      //           <li>
      //             Automated creation and deployment of binaries by using NuGet
      //             packages to minimize manual developer build steps and reduce
      //             licensing costs.
      //           </li>
      //           <li>
      //             Designed, configured, and managed Microsoft TFS build
      //             definitions for Process Simulation Software, improving code
      //             quality.
      //           </li>
      //         </ul>
      //       </Media.Body>
      //     </Media>
      //   </Row>
      //   <Row>
      //     <Media className="experience-item">
      //       <img
      //         width={64}
      //         height={64}
      //         className="mr-3"
      //         src={acm}
      //         alt="ACM-CSUF"
      //       />
      //       <Media.Body>
      //         <h5>
      //           <b>ACM-CSUF</b>
      //         </h5>
      //         <h4>Webmaster</h4>
      //         <ul>
      //           <li>
      //             Maintained and contributed to ACM’s preparatory course website
      //             for CSUF’s programming proficiency exam.
      //           </li>
      //           <li>
      //             Automated deployment of official website changes using
      //             Travis.CI, SSH key authentication and bash scripts.
      //           </li>
      //           <li>
      //             Maintained and contributed to the official ACM-CSUF website,
      //             written in React.
      //           </li>
      //         </ul>
      //       </Media.Body>
      //     </Media>
      //   </Row>
      // </Container>
      <></>
    );
  }
}

export default Experience;
