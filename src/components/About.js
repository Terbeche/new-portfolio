import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className='about-section'>
            <h1>About me</h1>
            <p className="about-text">Hello! My name is Mustapha and I'm a full-stack web developer.
                I aim to use software engineering to change people's lives using
                web development and AI. I created many web projects using HTML, CSS,
                JavaScript, React, Redux, and Ruby on Rails.Don't hestiate to contact
                me if you wanna know more about me and my work.
            </p>
            <button onClick={handleDownload}>Get My Resume</button>
            <hr />
        </div>
    );
};

const handleDownload = () => {
    const link = document.createElement('a');
    link.href = process.env.PUBLIC_URL + '/resume.pdf';
    link.download = 'resume.pdf';
    link.click();
};

export default About;
