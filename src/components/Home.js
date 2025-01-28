import React from 'react';
import './Home.css';
import myImage from "./Me.jpg";
import ButtonComponent from './Button';


function Home() {
    return (
        <section className="home">
            <div className="home-container">
                {/* Left side text */}
                <div className="home-text">
                    <h1>Hi,<br/>
                    
                        I'm Nishant Mourya</h1>
                    <h2>Front-End Developer & UI/UX Designer</h2>
                    <p>
                        Crafting clean, responsive, and user-friendly web experiences
                        with React and design expertise.
                    </p>
                   
                    <ButtonComponent
                        text="Contact Info"
                    />
                    <ButtonComponent
                        text="Download CV"
                    />
                </div>

                {/* Right side image */}
                <div className="home-image">
                    {/* Replace with your actual photo URL or imported image */}
                    <img
                        src={myImage}
                        alt="Nishant Mourya"
                    />
                </div>
            </div>
        </section>
    );
}

export default Home;
