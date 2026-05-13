import { useState, useEffect, useLayoutEffect, useRef } from "react";

export default function TypedText() {
    const phrase = " in my 1B term and seeking Fall 2026 internships";
    const [displayed, setDisplayed] = useState("");
    const [charIndex, setCharIndex] = useState(0);
    const [done, setDone] = useState(false);
    const [width, setWidth] = useState(0);
    const [ready, setReady] = useState(false);
    const measureRef = useRef(null);

    useLayoutEffect(() => {
        if (measureRef.current) {
            setWidth(measureRef.current.offsetWidth);
        }
    }, []);

    useEffect(() => {
        const delay = setTimeout(() => setReady(true), 1000);
        return () => clearTimeout(delay);
    }, []);

    useEffect(() => {
        if (!ready) return;
        if (charIndex < phrase.length) {
            const timeout = setTimeout(() => {
                setDisplayed(phrase.slice(0, charIndex + 1));
                setCharIndex(c => c + 1);
            }, 70);
            return () => clearTimeout(timeout);
        } else {
            setDone(true);
        }
    }, [charIndex, ready]);

    const isMobile = window.innerWidth < 768;

    return (
        <>
            <span ref={measureRef} style={{
                visibility: "hidden",
                position: "absolute",
                whiteSpace: "nowrap",
                left: "-9999px",
                top: "-9999px"
            }}>
                <strong>Currently:</strong>{phrase}
            </span>
            <span style={{
                display: "inline-block",
                textAlign: "left",
                width: isMobile ? "100%" : width ? `${width}px` : "auto",
                whiteSpace: isMobile ? "normal" : "nowrap",
            }}>
                <strong>Currently:</strong>{displayed}
                {!done && <span className="cursor">|</span>}
            </span>
        </>
    );
}