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
        <BrowserRouter>
            <Navbar />

            <Routes>
                {/* Homepage: About + SocialLinks, vertically centered */}
                <Route
                    path="/"
                    element={
                        <div className="homepage">
                            {/* <h1 className="name">Anisa Khan</h1> */}
                            <Home />
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

               

                {/* Contact page */}
                <Route
                    path="/contact"
                    element={
                        <div className="page">
                            <Contact />
                        </div>
                    }
                />

                {/* About page */}
                <Route
                    path="/about"
                    element={
                        <div className="page">
                            <About />
                        </div>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
