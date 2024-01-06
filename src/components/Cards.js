import React, { useState } from 'react';
import projects from './Projects';
import './Cards.css';
import { FaWindowClose, FaGithub, FaLocationArrow } from "react-icons/fa";

const Cards = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [currentProject, setCurrentProject] = useState(null);

    const handleButtonClick = (project) => {
        setCurrentProject(project);
        setShowPopup(true);
    };

    return (
        <div className='cards-section' >
            {projects.map((project) => (
                <div className="card">
                    <img src={project.featured_image} alt={project.title} />
                    <ul className="technologies">
                        {project.technologies.map((technology) => (
                            <li className="skill">{technology}</li>
                        ))}
                    </ul>
                    <button onClick={() => handleButtonClick(project)}>See Project</button>
                </div>
            ))}
            {showPopup && currentProject && (
                <div className="popup">
                    <div className="popup-content">
                        <div className="popup-top">
                            <div>
                                <h2>{currentProject.title}</h2>
                                <ul className="technologies">
                                    {currentProject.technologies.map((technology) => (
                                        <li className="skill">{technology}</li>
                                    ))}
                                </ul>
                            </div>
                            <button onClick={() => setShowPopup(false)} className="close-button"><FaWindowClose  /></button>
                        </div>
                        <div className="popup-bottom">
                            <div className="popup-left">
                               <img className="popup-image" src={currentProject.featured_image} alt={currentProject.title} />
                            </div>
                            <div className="popup-right">
                                <p>{currentProject.description}</p>
                                <div className="popup-links">
                                    <a href={currentProject.link_to_Source} className="popup-link">See Source <FaGithub /></a>
                                    <a href={currentProject.link_to_live_version} className="popup-link">See Live <FaLocationArrow /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cards;
