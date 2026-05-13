import { Link } from "react-router-dom";
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
                    <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                </li>
                <li>
                    <Link to="/About" onClick={() => setIsOpen(false)}>About</Link>
                </li>
                <li>
                    <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
                </li>
                <li>
                    <Link to="/skills" onClick={() => setIsOpen(false)}>Skills</Link>
                </li>
                <li>
                    <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
