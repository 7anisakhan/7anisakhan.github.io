import { useRef, useState, useEffect } from "react";
import useInView from "../hooks/useInView";
import TypedText from "./TypedText";

function About() {
    const ref = useRef(null);
    const inView = useInView(ref);
    const [runId, setRunId] = useState(0);

    useEffect(() => {
        if (inView) setRunId((n) => n + 1);
    }, [inView]);

    return (
        <div ref={ref}>
            <h2>About Me</h2>

            <div className="about">
                <p>
                    Hi! My name is Anisa and I'm going into my second-year of Electrical Engineering at the University of Waterloo.
                    I'm interested in exploring the intersection between hardware, software, and real-world systems by
                    experimenting with new tools and technologies to solve practical problems.
                </p>
            </div>

            <div className="about-category">
                <p><TypedText key={runId} /></p>
            </div>
        </div>
    );
}

export default About;