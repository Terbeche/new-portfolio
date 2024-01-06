import React from 'react';
import { FaGithub, FaLinkedin, FaMedium, FaTwitter } from "react-icons/fa";
import './Description.css';

const Description = () => {
    return (
        <div className="description-container">
            <div className="social-icons-description-container">
                <a href="https://github.com/Terbeche">
                    <FaGithub size={32} className="social-icons" />
                </a>
                <a href="https://www.linkedin.com/in/mustapha-terbeche">
                    <FaLinkedin size={32} className="social-icons" />
                </a>
                <a href="https://twitter.com/Terbech_Mostefa">
                    <FaTwitter size={32} className="social-icons" />
                </a>
                <a href="https://medium.com/@termus96">
                    <FaMedium size={32} className="social-icons" />
                </a>
            </div>
            <div className="text-container">
                <h1 className="big-title">Hey There. <br /> I'm Mustapha</h1>
                <h2 className="small-title">I'am a Full Stack Web Developer</h2>
                <p className="description-text">I can help you build a product , feature or website. Look through some of my work and experience! If you like what you see and have a project you need coded, don't hestiate to contact me.</p>
            </div>
            
        </div>
    );
};

export default Description;
