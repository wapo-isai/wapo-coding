import React, {useEffect, useState} from "react";
import {
  Layers,
  Database,
  Cloud,
  Network,
  GitBranch as Git,
  MonitorSmartphone,
} from "lucide-react";
import "./ServiceSection.css";
import {Element} from "react-scroll";

const ServiceCard = ({title, description, icon, delay}) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), delay * 100);
  }, []);

  return (
    <div className={`service-card ${animate ? "fade-in" : ""}`}>
      <div className="icon-box">{icon}</div>
      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>
    </div>
  );
};

function ServiceSection() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 200);
  }, []);

  const services = [
    {
      title: "Frontend Development",
      description:
        "Building responsive and interactive user interfaces using modern frameworks like React, Next.js, and TypeScript. Focus on performance and user experience.",
      icon: <MonitorSmartphone className="icon" />,
    },
    {
      title: "Backend Development",
      description:
        "Developing robust server-side applications with Java, Spring Boot, and PostgreSQL. Creating RESTful APIs and handling database operations.",
      icon: <Database className="icon" />,
    },
    {
      title: "Cloud Solutions",
      description:
        "Implementing and managing cloud infrastructure using AWS. Proficient in AWS services such as EC2, ECS, S3, Lambda, CDK, and RDS.",
      icon: <Cloud className="icon" />,
    },
    {
      title: "Microservices",
      description:
        "Designing and implementing microservices architecture. Breaking down monolithic applications into scalable, maintainable services.",
      icon: <Layers className="icon" />,
    },
    {
      title: "CI/CD Pipeline",
      description:
        "Setting up automated testing and deployment pipelines. Implementing DevOps practices for continuous integration and delivery.",
      icon: <Git className="icon" />,
    },
    {
      title: "API Integration",
      description:
        "Seamlessly connecting different systems and services through API integration. Building robust and secure communication channels.",
      icon: <Network className="icon" />,
    },
  ];

  return (
    <Element name="services" className="services-section">
      <div className="services-content">
        <div className={`intro-section ${animate ? "fade-in" : ""}`}>
          <div className="tag">Services</div>
          <h2 className="heading">What I Offer</h2>
          <p className="intro-text">
            Comprehensive development solutions tailored to your needs. From
            frontend to backend, cloud to DevOps, I deliver scalable and
            efficient solutions.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={index}
            />
          ))}
        </div>
      </div>
    </Element>
  );
}
export default ServiceSection;
