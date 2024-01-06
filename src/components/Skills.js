import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <div className='skills-section'>
            <div>
                <h2>Languages</h2>
                <ul>
                    <li>JavaScript</li>
                    <li>Ruby</li>
                    <li>Scala</li>
                    <li>Python</li>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul>
            </div>
            <div>
                <h2>Frameworks</h2>
                <ul>
                    <li>React</li>
                    <li>Vue.js</li>
                    <li>Nuxt</li>
                    <li>Ruby on Rails</li>
                    <li>Play</li>
                </ul>
            </div>
            <div>
                <h2>Skills</h2>
                <ul>
                    <li>Problem Solving</li>
                    <li>Teamwork</li>
                    <li>Communication</li>
                    <li>Git</li>
                    <li>GitHub</li>
                    <li>AWS</li>
                    <li>Sentry</li>
                </ul>
            </div>
        </div>
    );
};

export default Skills;
