import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import CodeEditor from "./components/CodeEditor";
import AboutSection from "./components/AboutSection";
import ServiceSection from "./components/ServiceSection";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import GlobalStyles from "./styles/GlobalStyles";

const AppContainer = styled.div`
  background-color: #0a0a0a;
  color: #ffffff;
  font-family: sans-serif;
`;

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <Navbar />
      <Hero />
      {/* <CodeEditor /> */}
      <AboutSection />
      <ServiceSection />
      <ProjectSection />
      <ContactSection />
    </AppContainer>
  );
}

export default App;
