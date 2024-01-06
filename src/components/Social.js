import React from 'react';
import { FaGithub, FaLinkedin, FaMedium, FaTwitter } from "react-icons/fa";
import './Social.css';

const Social = () => {
    return (
        <div className="social-icons-container">
            <a href="https://github.com/Terbeche">
                <FaGithub size={32} className='social-icons' />
            </a>
            <a href="https://www.linkedin.com/in/mustapha-terbeche">
                <FaLinkedin size={32} className='social-icons' />
            </a>
            <a href="https://twitter.com/Terbech_Mostefa">
                <FaTwitter size={32} className='social-icons' />
            </a>
            <a href="https://medium.com/@termus96">
                <FaMedium size={32} className='social-icons' />
            </a>
        </div>
    );
};

export default Social;
