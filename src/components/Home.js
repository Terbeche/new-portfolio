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
            <Description />
            <Cards />
            <About />
            <Skills />
            <Contact />
            <Social />
        </div>
    );
};

export default Home;
