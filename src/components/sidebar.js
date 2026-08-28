import './sidebar.scss'
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faCode, faEnvelope, faSuitcase, faBars, faClose, faTrophy } from '@fortawesome/free-solid-svg-icons'

import { useState } from 'react'

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);

    return (
        <div className="nav-bar"> 
            <div className="logo-hud">
                <div className="pulse-dot"></div>
                <span className="logo-text">GS</span>
            </div>

            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink exact="true" activeclassname="active" to="/" title="HOME">
                    <FontAwesomeIcon icon={faHome} className="nav-icon" onClick={() => setShowNav(false)} />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about" title="ABOUT">
                    <FontAwesomeIcon icon={faUser} className="nav-icon" onClick={() => setShowNav(false)} />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="languages-link" to="/languages" title="LANGUAGES">
                    <FontAwesomeIcon icon={faCode} className="nav-icon" onClick={() => setShowNav(false)} />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="work-link" to="/work" title="WORK">
                    <FontAwesomeIcon icon={faSuitcase} className="nav-icon" onClick={() => setShowNav(false)} />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/awards" title="AWARDS">
                    <FontAwesomeIcon icon={faTrophy} className="nav-icon" onClick={() => setShowNav(false)} />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" title="CONTACT">
                    <FontAwesomeIcon icon={faEnvelope} className="nav-icon" onClick={() => setShowNav(false)} />
                </NavLink>
                <FontAwesomeIcon icon={faClose} color="#00f0ff" size="2x" className="close-icon" onClick={() => setShowNav(false)} />
            </nav>
           
            <div className="hud-bottom-tag">
                <span>v2.6</span>
            </div>

            <FontAwesomeIcon onClick={() => setShowNav(true)} icon={faBars} color="#00f0ff" size="2x" className="hamburger-icon" />
        </div>
    );
};

export default Sidebar 