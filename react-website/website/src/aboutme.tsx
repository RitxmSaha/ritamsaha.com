// AboutMe.tsx
import HighlightLink from './highlightlink'
import React from 'react';
import './aboutme.css';


const AboutMe: React.FC = () => {
    return (
        <section className="about-me">
            <h2>About Me</h2>
            <div>
                <p>
                    I'm a current freshman studying Computer Science at the{" "}<HighlightLink text="University of California, Santa Barbara" link="https://www.cs.ucsb.edu" />.
                    <br></br><br></br> 
                    In the past, I've led initiatives like <HighlightLink text="Los Altos Hacks" link="https://www.losaltoshacks.com" /> and
                    placed in worldwide math modeling competitions (<HighlightLink text="M3 2022" link="https://m3challenge.siam.org/archives/2022/winning-teams" /> <HighlightLink text="M3 2023" link="https://m3challenge.siam.org/node/620" />).
                    <br></br><br></br>
                    You can check out the projects I've worked on to the right, on my <HighlightLink text="Github" link="https://github.com/RitxmSaha" />, or on my <HighlightLink text="Resume" link="https://github.com/RitxmSaha" />.
                    <br></br><br></br>
                    Currently, I'm interested in creating real world applications with Computer Vision. I'm always looking for new oppurtunities to pursue, if 
                    you are interested in collaborating with me, feel free to reach out to me at <HighlightLink text="ritam@ucsb.edu" link="mailto:ritam@ucsb.edu" />!


                
                
                </p>
            </div>

        </section>
    );
}

export default AboutMe;
