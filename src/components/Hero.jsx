import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Play, ArrowRight} from "lucide-react";
import "./HeroSection.css";
import {Link} from "react-scroll";

function Hero() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className={`hero-title ${animate ? "fade-in" : ""}`}>
          Building Scalable, Resilient, and Cloud-Native
          <span className="highlight">{"{Applications}"}</span>
        </h1>

        <div className="hero-actions">
          {/* <button className="video-btn">
            <Play className="icon" />
            <span>Watch a video</span>
          </button> */}

          <p className={`hero-description ${animate ? "fade-in delay" : ""}`}>
            Hi, I’m Isai Martinez, a Backend & Cloud Software Engineer with a
            passion for building high-performance, scalable, and resilient
            systems. With expertise in Java, Spring Boot, and AWS, I specialize
            in designing microservices architectures, API development, and cloud
            infrastructure that power modern applications.
          </p>

          <div className="demo-btn-wrapper">
            <Link to="projects" smooth={true} duration={1000}>
              <button className="demo-btn">
                Checkout my work
                <ArrowRight className="icon" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
