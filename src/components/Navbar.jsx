import React, {useState} from "react";
import styled from "styled-components";
import portrait from "../assets/portrait.jpeg";
import "./Navbar.css";

import {Link} from "react-scroll";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background-color: #101317;
  width: 85%;
  margin: 0 auto;
  font-family: sans-serif;
  position: relative;
`;

const Logo = styled.div`
  width: 75px;

  img {
    border-radius: 50%;
    width: 75px;
    cursor: pointer;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  width: 50%;

  @media (max-width: 768px) {
    display: ${({isOpen}) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 100%;
    right: 0;
    width: 100%;
    background-color: #101317;
    padding: 1rem;
    gap: 1rem;
    z-index: 1000;

    .nav-link {
      text-align: center;
      padding: 0.5rem 0;
    }
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: white;

  @media (max-width: 768px) {
    display: block;
  }
`;

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Nav>
      <Logo>
        <img src={portrait} alt="Portrait" />
      </Logo>
      <HamburgerButton onClick={toggleMenu}>
        {isMenuOpen ? "✕" : "☰"}
      </HamburgerButton>
      <NavLinks isOpen={isMenuOpen}>
        <Link to="about" smooth={true} duration={500} className="nav-link">
          About
        </Link>
        <Link to="services" smooth={true} duration={800} className="nav-link">
          Services
        </Link>
        <Link to="projects" smooth={true} duration={900} className="nav-link">
          Works
        </Link>
        <Link to="contact" smooth={true} duration={1000} className="nav-link">
          Contact
        </Link>
        <a
          href="https://medium.com/@isaimartinez52"
          target="_blank"
          className="nav-link"
        >
          Blog
        </a>
      </NavLinks>
    </Nav>
  );
}

export default Navbar;
