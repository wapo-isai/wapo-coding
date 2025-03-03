import React, {useState} from "react";
import "./ContactSection.css";
import {Github, Mail, MessageSquare, Send} from "lucide-react";
import LinkedInIcon from "../assets/LinkedInIcon.svg?react";
import {Element} from "react-scroll";

import emailjs from "@emailjs/browser";

/* --- Icon Components --- */
const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 0 0 8.205 11.385c.6.111.82-.261.82-.58 0-.287-.011-1.243-.017-2.253-3.338.726-4.042-1.61-4.042-1.61-.546-1.388-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.304.762-1.605-2.665-.303-5.467-1.332-5.467-5.93 0-1.31.468-2.381 1.235-3.221-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.404 11.5 11.5 0 0 1 3.003.404c2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.119 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.807 5.624-5.48 5.921.43.37.823 1.1.823 2.222 0 1.606-.015 2.903-.015 3.293 0 .321.218.694.825.576A12.005 12.005 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const XIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 1200 1227"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
      fill="white"
    />
  </svg>
);

/* --- Social Links Data --- */
const socialLinks = [
  {
    name: "GitHub",
    icon: <Github />,
    url: "https://github.com/wapo-isai",
  },
  {
    name: "LinkedIn",
    icon: (
      <img
        src={LinkedInIcon}
        alt="LinkedIn"
        style={{width: "25px", height: "25px"}}
      />
    ),
    url: "https://www.linkedin.com/in/isai-martinez/",
  },
  {
    name: "Twitter (or X)",
    icon: <XIcon />,
    url: "https://x.com/wapoisai",
  },
  {
    name: "Email",
    icon: <Mail />,
    url: "mailto:isaimartinez52@gmail.com",
  },
];

function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    // Collect form data
    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    console.log(data);

    // Simulate form submission delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    try {
      // Replace these with your actual EmailJS credentials
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setToast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
      }
    } catch (error) {
      console.error("Error sending email:", error);

      setToast({
        title: "Message failed to send.",
        description: "Please try again.",
      });
    }

    // Clear the toast after 3 seconds
    setTimeout(() => setToast(null), 3000);

    setIsSubmitting(false);
  };

  return (
    <Element name="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <div className="contact-badge">
            <span>Contact</span>
          </div>
          <h2 className="contact-title">Get in Touch</h2>
          <p className="contact-description">
            Have a project in mind or want to collaborate? Feel free to reach
            out. I'm always open to discussing new opportunities.
          </p>
        </div>

        <div className="contact-content">
          {/* Left Column: Contact Form */}
          <div className="contact-form-wrapper">
            <div className="contact-box">
              <div className="contact-box-header">
                <div className="icon-container" style={{color: "#8de09a"}}>
                  <MessageSquare />
                </div>
                <h3>Send a Message</h3>
              </div>
              <form onSubmit={handleSubmit} className="contact-form">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    className="contact-input"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    required
                    className="contact-input"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your message"
                    required
                    className="contact-textarea"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="contact-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Social Links & Location */}
          <div className="contact-info">
            <div className="contact-box">
              <h3>Connect With Me</h3>
              <div className="social-links">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="contact-box">
              <h3>Location</h3>
              <p>Based in Fairfax, VA</p>
              <p>Available for remote work worldwide</p>
            </div>
          </div>
        </div>
      </div>
      {toast && (
        <div className="toast">
          <strong>{toast.title}</strong>
          <p>{toast.description}</p>
        </div>
      )}
    </Element>
  );
}

export default ContactSection;
