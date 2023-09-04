import Slider from './Slider';

const Projects = () => {
    return ( 
        <div className="container">
            <div className="project-content">
                <p>portfolio</p>
                <h3>One step at a time</h3>
                <div className="project-grid">
                    <div className="project-1">
                        <div className="project-img">
                            <img src={require("../assets/images/KrissHome.jpeg")} alt="KrissGraph Website" />
                        </div>    
                        <div className="project-text">
                            <h3>Fashion Ecommerce KrissGraph</h3>
                            <p>With no knowledge of basic HTML CSS going in, it was the first ever website development project I started. Despite the lack of expertise I managed to develop a working locally hosted website in 4 weeks.</p>
                            <div className="stack">
                                <p>HTML/CSS</p>
                                <p>Tomcat</p>
                                <p>SQL</p>
                                <p>JQuery</p>
                            </div>
                        </div>
                    </div>


                    <div className="project-1">
                        <Slider/>
                        <div className="project-text">
                            <h3>Fashion Ecommerce KrissGraph</h3>
                            <p>With no knowledge of basic HTML CSS going in, it was the first ever website development project I started. Despite the lack of expertise I managed to develop a working locally hosted website in 4 weeks.</p>
                            <div className="stack">
                                <p>HTML/CSS</p>
                                <p>Tomcat</p>
                                <p>SQL</p>
                                <p>JQuery</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
     );
}
 
export default Projects;