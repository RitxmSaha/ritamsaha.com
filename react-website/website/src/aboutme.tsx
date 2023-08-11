// AboutMe.tsx
import HoverAnnotation from './hoverannotation';
import HighlightLink from './highlightlink'
import React from 'react';
import './aboutme.css';

const AboutMe: React.FC = () => {
    return (
        <section className="about-me">
            <h2>About Me</h2>
            <p>
                I'm a current freshman studying Computer Science at the{" "}<HighlightLink text="University of California, Santa Barbara" link="https://www.cs.ucsb.edu" />. And I would love to work somewhere cool one day
                

            </p>

        </section>
    );
}

export default AboutMe;
