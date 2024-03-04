import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo-edited.jpg'
import sublogo from '../../assets/images/sublogo2-edited.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope, faHome,faHouse, faUser} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faLinkedin, faViber } from '@fortawesome/free-brands-svg-icons'


function Sidebar() {
    return(
        <div className='nav-bar'>
          
            <Link className='logo' to='/'>  
              
                <img width='58px' height='auto' src={logo} alt="logo" /> <br />
              
                <img width='58px' height='auto' src={sublogo} alt="subLogo" />
              
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHouse} color='#fdfdfe'></FontAwesomeIcon>                    
                </NavLink>

                <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color='#fdfdfe'></FontAwesomeIcon>                    
                </NavLink>

                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color='#fdfdfe'></FontAwesomeIcon>                    
                </NavLink>
            </nav>

            <ul>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/thant-lwin-soe'>
                        <FontAwesomeIcon icon={faLinkedin} color='#fdfdfe'></FontAwesomeIcon>
                    </a>
                </li>

                <li>
                    <a target='_blank' rel='noreferrer' href='https://www.facebook.com/thintlwin.soe'>
                        <FontAwesomeIcon icon={faFacebook} color='#fdfdfe'></FontAwesomeIcon>
                    </a>
                </li>

                <li>
                    <a target='_blank' rel='noreferrer' href='https://www.github.com/ThantLwinSoe'>
                        <FontAwesomeIcon icon={faGithub} color='#fdfdfe'></FontAwesomeIcon>
                    </a>
                </li>
            </ul>
            
        </div>
    )
}

export default Sidebar