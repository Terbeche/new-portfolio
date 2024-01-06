import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
    return (
        <nav>
            <div className="menu-left">
                <Link to="/">Mostefa Terbeche</Link>
            </div>
            <div className="menu-right">
                <a href="#cards">Portfolio</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
                <a href="#social">Social</a>
            </div>
        </nav>
    );
};

export default Menu;
