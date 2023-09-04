import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return ( 
        <footer>
        <div className="container">
            <div className="foot">
                <h3>Copyright © Keegan Lee All Rights Reserved</h3>
                <div className="foot-socials">
                <a aria-label="linkedin" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/keeganlee107/">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a aria-label="github" rel="noreferrer" target="_blank" href="https://github.com/Kiwigan">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
            </div>
            
        </div>
        </footer>
     );
}
 
export default Footer;