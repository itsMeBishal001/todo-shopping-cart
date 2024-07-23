import React from "react";
import "./About.css";

/**
 * About component to display information about the company.
 *
 * @returns {JSX.Element} The About component.
 */
function About() {
  return (
    <div className="about">
      {/* Header section for the About page */}
      <div className="about-header">
        <h1>About Us</h1>
      </div>
      {/* Main content section of the About page */}
      <div className="about-content">
        {/* Section describing the company */}
        <section className="about-section">
          <h2>Our Company</h2>
          <p>
            Welcome to our company! We are dedicated to delivering the best
            products and services to our customers. Our mission is to innovate
            and lead in our industry, always putting our customers first.
          </p>
        </section>
        {/* Section describing the team */}
        <section className="about-section">
          <h2>Our Team</h2>
          <p>
            We have a passionate and skilled team committed to excellence. Our
            team members bring diverse expertise and a collaborative spirit,
            ensuring that we achieve great results together.
          </p>
        </section>
        {/* Section describing the projects */}
        <section className="about-section">
          <h2>Our Projects</h2>
          <p>
            We work on a variety of exciting projects, from web applications to
            mobile solutions. Our projects are designed to solve real-world
            problems and make a positive impact. Explore our portfolio to see
            what we've accomplished.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
