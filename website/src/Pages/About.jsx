import TypedText from "./TypedText";

function About() {

    return (

        <section id ="about">
            <h2> About Me</h2>
        <div className="about">
            <p> Hi! My name is Anisa and I'm a first-year electrical engineering student at the University of Waterloo.
                I'm interested in exploring the intersection between hardware, software, and real-world systems by
                experimenting with new tools and technologies to solve practical problems.
                </p>
            </div>

            <div className="about-category">
                <p><TypedText /></p>
            </div>

        </section>
    );
}

export default About;