import React from 'react';
import Menu from './Menu';
import Cards from './Cards';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import Social from './Social';
import Description from './Description';

const Home = () => {
    return (
        <div>
            <Menu />
            <div id="description"><Description /></div>
            <div id="cards"><Cards /></div>
            <div id="about"><About /></div>
            <div id="skills"><Skills /></div>
            <div id="contact"><Contact /></div>
            <div id="social"><Social /></div>
        </div>
    );
};

export default Home;
