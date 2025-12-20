import { FaGithub, FaLinkedin } from "react-icons/fa";

function SocialLinks() {
    return (
        <div className="social-links">
            <a
                href="https://github.com/7anisakhan"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaGithub className="icon github" size={30} />
            </a>
            <a
                href="https://www.linkedin.com/in/anisakhan-/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaLinkedin className="icon linkedin" size={30} />
            </a>
        </div>
    );
}

export default SocialLinks;
