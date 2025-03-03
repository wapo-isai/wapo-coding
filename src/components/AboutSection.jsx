import React, {useEffect, useState} from "react";
import {Code2, GraduationCap, Briefcase, Award} from "lucide-react";
import "./AboutSection.css";
import SAA from "../assets/SAA.png";
import CPF from "../assets/CPF.png";
import SAFE from "../assets/SAFE.png";
import NAU from "../assets/NAU.jpeg";
import {Element} from "react-scroll";

const ExperienceItem = ({title, subtitle, date, description, icon}) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 200);
  }, []);

  return (
    <div className={`experience-item ${animate ? "fade-in" : ""}`}>
      <div className="icon-box">{icon}</div>
      <div className="experience-content">
        <h3 className="title">{title}</h3>
        <p className="subtitle">{subtitle}</p>
        <p className="date">{date}</p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default function AboutSection() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 200);
  }, []);

  return (
    <Element name="about" className="about-section">
      <div className="about-content">
        <div className={`intro-section ${animate ? "fade-in" : ""}`}>
          <div className="tag">About Me</div>
          <h2 className="heading">Background & Experience</h2>
          <p className="intro-text">
            A passionate developer with expertise in building innovative
            solutions. Focused on creating impactful applications that solve
            real-world problems.
          </p>
        </div>

        <div className="experience-grid">
          <ExperienceItem
            icon={<Code2 className="icon" />}
            title="Technical Skills"
            subtitle="Languages & Technologies"
            date="2020 - Present"
            description="Proficient in TypeScript, React, AWS, Java & Spring Boot, Linux, and PostgreSQL. Experienced in building scalable applications, creating CI/CD pipelines, and implementing responsive designs with best practices."
          />

          <ExperienceItem
            icon={<GraduationCap className="icon" />}
            title="Education"
            subtitle="Computer Science"
            date="2016 - 2020"
            description="I graduated from Northern Arizona University with a Bachelor's Degree in Computer Science, driven by a lifelong passion for technology. My curiosity about the intricate workings of web applications has led me to continually expand my skill set and embrace new challenges."
          />

          <ExperienceItem
            icon={<Briefcase className="icon" />}
            title="Work Experience"
            subtitle="Custom Software Engineer Sr.Analyst"
            date="2020 - Present"
            description="As a contractor at Hexaware for FreddieMac, I worked on enterprise-level financial applications, focusing on Java, Spring Boot, and microservices architecture to build reliable, high-performance systems. 
            
            Most recently, as a contractor at Accenture Federal Services for the Department of Veterans Affairs, I contributed to cloud-native solutions that improved the digital experience for veterans. This role involved modernizing legacy systems, implementing cloud-based infrastructure (AWS), and ensuring compliance with federal security standards."
          />

          <ExperienceItem
            icon={<Award className="icon" />}
            title="Achievements"
            subtitle="Awards & Certifications"
            date="2016 - Present"
            description="Some of my achievements include obtaining the NAU Lumberjack Scholarship - Awarded a full-tuition scholarship for academic excellence. I'm AWS Certified (Multiple Certifications) -  Demonstrated expertise in AWS cloud services, architecture, and best practices. I'm also aCertified SAFe 6 Agilist – Recognized for proficiency in Agile methodologies, scaled Agile frameworks, and enterprise agility"
          />
        </div>

        <h2 className="heading" style={{marginTop: "32px"}}>
          Awards and Recognitions
        </h2>
        <div className="award-item">
          <div className="award-content">
            <div className="award-icon">
              <img src={SAA} alt="Award" />
            </div>
            <div className="award-text">
              <h3 className="award-title">AWS Solutions Architect Associate</h3>
              <p className="year">2024</p>
            </div>
          </div>
        </div>

        <div className="award-item">
          <div className="award-content">
            <div className="award-icon">
              <img src={CPF} alt="Award" />
            </div>
            <div className="award-text">
              <h3 className="award-title">AWS Cloud Practioner Foundational</h3>
              <p className="year">2023</p>
            </div>
          </div>
        </div>

        <div className="award-item">
          <div className="award-content">
            <div className="award-icon">
              <img src={SAFE} alt="Award" />
            </div>
            <div className="award-text">
              <h3 className="award-title">Certified SAFe® 6 Agilist</h3>
              <p className="year">2023</p>
            </div>
          </div>
        </div>

        <div className="award-item">
          <div className="award-content">
            <div className="award-icon">
              <img src={NAU} alt="Award" />
            </div>
            <div className="award-text">
              <h3 className="award-title">
                Bachelor of Science in Computer Science
              </h3>
              <p className="year">2020</p>
            </div>
          </div>
        </div>

        <div className="award-item">
          <div className="award-content">
            <div className="award-icon">
              <img src={NAU} alt="Award" />
            </div>
            <div className="award-text">
              <h3 className="award-title">NAU Lumberjack Scholarship</h3>
              <p className="year">2016</p>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
