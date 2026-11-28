import { useRef } from "react";
import useInView from "../hooks/useInView";
import TypedText from "./TypedText";

function About() {
    const ref = useRef(null);
    const seen = useInView(ref);

    return (
        <div ref={ref}>
            <h2>About Me</h2>

            <div className="about">
                <p>
                    Hi! My name is Anisa and I'm going into my second year of Electrical Engineering at the University of Waterloo.
                    I'm interested in exploring the intersection between hardware, software, and real-world systems by
                    experimenting with new tools and technologies to solve practical problems.
                </p>
            </div>

            <div className="about-category">
                <p><TypedText start={seen} /></p>
            </div>
        </div>
    );
}

export default About;