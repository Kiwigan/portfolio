import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import HTML5Logo from '../assets/icons/icons8-html.svg'
import CSS3Logo from '../assets/icons/icons8-css3.svg'
import NodeJsLogo from '../assets/icons/icons8-nodejs.svg'
import MongoDBLogo from '../assets/icons/MongoDB.svg'
import ReactLogo from '../assets/icons/react-2.svg'
import PythonLogo from '../assets/icons/icons8-python.svg'



const Home = () => {

    const techs = [
        {
            id: 1,
            src: HTML5Logo,
            title: 'HTML',  
        },
        {
            id: 2,
            src: CSS3Logo,
            title: 'CSS',  
        },
        {
            id: 3,
            src: ReactLogo,
            title: 'React',  
        },
        {
            id: 4,
            src: MongoDBLogo,
            title: 'MongoDB',  
        },
        {
            id: 5,
            src: NodeJsLogo,
            title: 'NodeJs',  
        },
        {
            id: 6,
            src: PythonLogo,
            title: 'Python',  
        }
    ]

    return(
        <div className="container">
        <div className="content">
            <div className="hero-main">
                <div className="hero-text">
                    <h1>React Developer</h1>
                    <p>Hi, I'm Keegan Lee. I'm a penultimate year student in Naynang Technological University (NTU) persuing a degree in Information Engineering and Media (IEM)</p>
                    <span>
                    <a aria-label="linkedin" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/keeganlee107/">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a aria-label="github" rel="noreferrer" target="_blank" href="https://github.com/Kiwigan">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    </span>
                </div>

                <div className="box">
                    <div className="hero-image">
                        <img src={require("../assets/images/profile-pic.jpg")} />
                    </div>
                </div>
                
            </div>
            <div className="skills">
                <p>Tech Stack</p>
                <ul>
                {techs.map(tech => (
                    <li>
                        <img src={tech.src} title={tech.title}/>
                    </li>
                ))} 
            
                </ul>
            </div>
        </div>
        </div>
    )
}
export default Home


