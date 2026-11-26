import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import "./App.css";

function App() {
    return (
        <>
            <Navbar />

            <section id="home" className="homepage">
                <Home />
                <SocialLinks />
            </section>

            <section id="about" className="page">
                <About />
            </section>

            <section id="skills" className="page">
                <Skills />
            </section>

            <section id="projects" className="page">
                <Projects />
            </section>

            <section id="contact" className="page">
                <Contact />
            </section>
        </>
    );
}

export default App;
