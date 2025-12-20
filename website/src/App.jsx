import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import SocialLinks from "./components/SocialLinks";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                {/* Homepage: About + SocialLinks, vertically centered */}
                <Route
                    path="/"
                    element={
                        <div className="homepage">
                            <h1 className="name">Anisa Khan</h1>
                            <About />
                            <SocialLinks />
                        </div>
                    }
                />

                {/* Skills page */}
                <Route
                    path="/skills"
                    element={
                        <div className="page">
                            <Skills />
                        </div>
                    }
                />

                {/* Projects page */}
                <Route
                    path="/projects"
                    element={
                        <div className="page">
                            <Projects />
                        </div>
                    }
                />

                {/* Resume page */}
                <Route
                    path="/resume"
                    element={
                        <div className="page">
                            <Resume />
                        </div>
                    }
                />

                {/* Contact page */}
                <Route
                    path="/contact"
                    element={
                        <div className="page">
                            <Contact />
                        </div>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
