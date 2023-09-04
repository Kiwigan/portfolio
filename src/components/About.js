

const About = () => {
    return ( 
        <div className="container">
        <div className="about-content">
            <div className="img-side">
                <img src={require("../assets/images/NTU.jpg")} alt="NTU" />
            </div>
            <div className="text-side">
                <h3>About Me</h3>
                <h4>Penultimate year student in NTU</h4>
                <p>As a student in Information Engineering and Media, I am constantly exposed to the technicals of software development and the creative artistic side of the media industry. This puts me in a unique position to be able be the bridge between the designers and the developers </p>
            </div>
        </div>
        </div>
     );
}
 
export default About;