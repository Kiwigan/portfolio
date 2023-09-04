
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const Contact = () => {
    return ( 
        <div className="container">
            <div className="contact-content">
                <div className="contact-title">
                    <p>Contact</p>
                    <h3>Feel free to reach out!</h3>
                </div>
                <div className="contact-icons">
                    <div className="contact-iconbox">
                        <span>
                        <FontAwesomeIcon icon={faTelegram} style={{color: "#075ced",}}/>
                        </span>
                        <div className="contact-info">
                            <h3>Telegram Contact</h3>
                            <p>@kiwigan</p>
                        </div>
                    </div>

                    <div className="contact-iconbox">
                        <span>
                        <FontAwesomeIcon icon={faEnvelope} style={{color: "#075ced",}} />
                        </span>
                        <div className="contact-info">
                            <h3>Mail</h3>
                            <p>JLEE285@e.ntu.edu.sg</p>
                        </div>
                    </div>


                </div>
            </div>

        </div>
     );
}
 
export default Contact;