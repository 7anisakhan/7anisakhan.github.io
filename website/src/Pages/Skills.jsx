import React from "react";

function Skills() {
    return (
        <section id="skills">
            <h2>Skills</h2>

            <div className="skills-category">
                <h3>Programming Languages</h3>
                <ul>
                    <li>C++</li>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>

                </ul>
            </div>

            <div className="skills-category">
                <h3>Tools & Platforms</h3>
                <ul>
                    <li>VS Code</li>
                    <li>Visual Studio</li>
                    <li>Arduino</li>
                </ul>
            </div>

            <div className="skills-category">
                <h3>Hardware & Prototyping</h3>
                <ul>
                    <li>Breadboards</li>
                    <li>Oscilloscopes</li>
                    <li>Function Generators</li>
                </ul>
            </div>

            <div className="skills-category">
                <h3>Productivity Tools</h3>
                <ul>
                    <li>Microsoft Word</li>
                    <li>Microsoft Excel</li>
                    <li>Microsoft PowerPoint</li>
                </ul>
            </div>

            <div className="skills-category">
                <h3>Web Development & Portfolio Skills</h3>
                <ul>
                    <li>React / JSX</li>
                    <li>CSS / Flexbox / Grid</li>
                    <li>Vite</li>
                    <li>Git & GitHub</li>
                </ul>
            </div>
        </section>
    );
}

export default Skills;
