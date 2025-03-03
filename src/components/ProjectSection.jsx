import React, {useState, useRef, useEffect, useCallback} from "react";
import "./ProjectSection.css";
import brewedApp from "../assets/brewed-app-2.png";
import voiceCraft from "../assets/text-to-speech.webp";
import cloudFormation from "../assets/bastion-host.webp";
import placeholder from "../assets/placeholder.svg";
import {Element} from "react-scroll";

const projects = [
  {
    title: "Brewed Awakening - Full Stack Cloud Application",
    description:
      "A full-stack e-commerce solution with real-time inventory management and payment processing.",
    image: brewedApp,
    techStack: ["React.js", "TypeScript", "Spring Boot", "AWS"],
    liveUrl: "#",
    githubUrl: "https://github.com/wapo-isai/brewed-awakening-cdk-deployment",
  },
  {
    title: "Voice Craft - AWS Lambda Text to Speech Converter",
    description:
      "A comprehensive dashboard for managing cloud resources across multiple providers.",
    image: voiceCraft,
    techStack: ["HTML", "CSS", "JavaScript", "AWS Lambda", "AWS S3"],
    liveUrl:
      "https://medium.com/@isaimartinez52/text-to-speech-project-d142a9e90218",
    githubUrl: "https://github.com/wapo-isai/VoiceCraft#",
  },
  {
    title: "Full AWS Infrastructure using IaC with CloudFormation",
    description:
      "Used AWS CloudFormation to create EC2 instances, VPC, and other resources.",
    image: cloudFormation,
    techStack: ["AWS", "CloudFormation", "VPC", "EC2", "ELB"],
    liveUrl:
      "https://medium.com/@isaimartinez52/aws-fundamentals-with-cloudformation-b0868d27e615",
    githubUrl: "#",
  },
];

const ChevronLeftIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg
    width="25"
    height="25"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const GithubIcon = () => (
  <svg width="25" height="25" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 0 0 8.205 11.385c.6.111.82-.261.82-.58 0-.287-.011-1.243-.017-2.253-3.338.726-4.042-1.61-4.042-1.61-.546-1.388-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.304.762-1.605-2.665-.303-5.467-1.332-5.467-5.93 0-1.31.468-2.381 1.235-3.221-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.404 11.5 11.5 0 0 1 3.003.404c2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.119 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.807 5.624-5.48 5.921.43.37.823 1.1.823 2.222 0 1.606-.015 2.903-.015 3.293 0 .321.218.694.825.576A12.005 12.005 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const ProjectCard = ({
  title,
  description,
  image,
  techStack,
  liveUrl,
  githubUrl,
}) => (
  <div className="project-card">
    <div className="project-card-inner">
      <div className="project-image-container">
        <img
          src={image || placeholder}
          alt={title}
          style={{objectFit: "fill"}}
        />
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="tech-stack">
          {techStack.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
        <div className="project-links">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <ExternalLinkIcon />
              <span>Article</span>
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <GithubIcon />
              <span>Source Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
);

function ProjectSection() {
  const carouselRef = useRef(null);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true);

  const updateButtons = useCallback(() => {
    const container = carouselRef.current;
    if (container) {
      setPrevBtnEnabled(container.scrollLeft > 0);
      setNextBtnEnabled(
        container.scrollLeft + container.clientWidth < container.scrollWidth
      );
    }
  }, []);

  const scrollPrev = () => {
    const container = carouselRef.current;
    if (container) {
      container.scrollBy({left: -container.clientWidth, behavior: "smooth"});
    }
  };

  const scrollNext = () => {
    const container = carouselRef.current;
    if (container) {
      container.scrollBy({left: container.clientWidth, behavior: "smooth"});
    }
  };

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;
    updateButtons();
    container.addEventListener("scroll", updateButtons);
    return () => container.removeEventListener("scroll", updateButtons);
  }, [updateButtons]);

  return (
    <Element name="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <div className="projects-badge">
            <span>Projects</span>
          </div>
          <h2 className="projects-title">Featured Work</h2>
          <p className="projects-description">
            A showcase of my recent projects, demonstrating expertise in various
            technologies and problem-solving capabilities.
          </p>
        </div>

        <div className="carousel">
          <div className="carousel-container" ref={carouselRef}>
            <div className="carousel-track">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>

          <button
            className={`carousel-button carousel-button-left ${
              !prevBtnEnabled ? "disabled" : ""
            }`}
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
          >
            <ChevronLeftIcon />
          </button>
          <button
            className={`carousel-button carousel-button-right ${
              !nextBtnEnabled ? "disabled" : ""
            }`}
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
          >
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </Element>
  );
}

export default ProjectSection;
