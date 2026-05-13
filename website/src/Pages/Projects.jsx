
import deliriumBuddy from "../assets/deliriumBuddy.png";

function Projects() {

    return (

        <section>
            <h2>Projects</h2>


            <div className="project">
                <div className="project-content">

                    <div className="project-text">
                        <h2>Delirium Buddy</h2>
                        <ul>
                            <li> Designed and built an Arduino-based dimmable light with a call-button feature to help prevent hospital induced delirium </li>

                            <li> Conducted literature review to identify key delirium risk factors and assess their impact to guide project's features </li>
                        </ul>
                    </div>

                    <img src={deliriumBuddy}
                        alt="Delirium Buddy"
                    />
                </div>
            </div>
            
        </section >

        
    );
}

export default Projects ;