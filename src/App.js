import React from "react";

import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Hobbies from "./Components/Hobbies";
import Navigation from "./Components/Navigation";
import Projects from "./Components/Projects";
import Title from "./Components/Title";
import constructionImg from "./assets/underconstruction.webp";

import "./App.css";

function App() {
  return (
    <div className="App" id="home">
      <head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossorigin="anonymous"
        />
      </head>
      {/* <Navigation></Navigation> */}
      <header className="App-header">
        <img src={constructionImg} />
        <Title></Title>
      </header>
      {/* <AboutMe></AboutMe>
      <Experience></Experience>
      <Projects></Projects> */}
      {/* TODO: */}
      {/* <Hobbies></Hobbies> */}
      {/* <Contact></Contact> */}
    </div>
  );
}

export default App;
