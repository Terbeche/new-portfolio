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
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/social">Social</Link>
            </div>
        </nav>
    );
};

export default Menu;
