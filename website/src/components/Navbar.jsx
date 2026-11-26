import { useState } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">

            <button
                className="hamburger"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle navigation"
            >
                {isOpen ? "✕" : "☰"}
            </button>

            <ul className={`nav-links ${isOpen ? "active" : ""}`}>
                <li>
                    <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
                </li>
                <li>
                    <a href="#about" onClick={() => setIsOpen(false)}>About</a>
                </li>
                <li>
                    <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
                </li>
                <li>
                    <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
                </li>
                <li>
                    <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;