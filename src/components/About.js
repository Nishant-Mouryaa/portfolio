import React from 'react';
import './About.css';
import myImage from "./Me.jpg";

function About() {
    return (
        <section className="about-section">
            <div className="about-container">

                {/* Left Content */}
                <div className="about-left fadeIn">
                    <h2>About Me</h2>
                    <h3>Front-End Dev & Lifelong Learner</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus vehicula, libero in tristique suscipit, lacus eros dictum orci,
                        at scelerisque mi justo in purus.
                    </p>
                    <p>
                        I have experience in React, Node.js, Express, MongoDB, and more.
                        Always eager to learn new technologies and best practices.
                    </p>

                    {/* Skill Cards */}
                    <div className="skills">
                        {/* Example with optional icon */}
                        {/* <div className="skill-card">
              <img src="path-to-react-icon.png" alt="React Icon" className="skill-icon" />
              React
            </div> */}

                        <div className="skill-card">React</div>
                        <div className="skill-card">Node.js</div>
                        <div className="skill-card">Express</div>
                        <div className="skill-card">MongoDB</div>
                        <div className="skill-card">UI/UX</div>
                    </div>
                </div>

                {/* Right Content (Profile Image) */}
                <div className="about-right fadeIn">
                    <img
                        src={myImage}
                        alt="Profile"
                        className="profile-pic"
                    />
                </div>
            </div>
        </section>
    );
}

export default About;
