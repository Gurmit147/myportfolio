import './sidebar.scss'
import { Link, NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faSuitcase, faFolderOpen, faBars, faClose } from '@fortawesome/free-solid-svg-icons'

import { useState } from 'react'

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false)
    return(
        <div className = 'nav-bar'> 
           
            <nav className={showNav ? 'mobile-show' : ""}>
                <NavLink exact="true" activeclassname = "active" to="/">
                    <FontAwesomeIcon icon = {faHome} color = "#4d4d4e" onClick={() => setShowNav(false)} />
                </NavLink>
                <NavLink exact="true" activeclassname = "active" className = "about-link" to="/about">
                    <FontAwesomeIcon icon = {faUser} color = "#4d4d4e" onClick={() => setShowNav(false)}/>
                </NavLink>
                <NavLink exact="true" activeclassname = "active" className = "work-link" to="/work">
                    <FontAwesomeIcon icon = {faSuitcase} color = "#4d4d4e" onClick={() => setShowNav(false)} />
                </NavLink>
                <NavLink exact="true" activeclassname = "active" className = "portfolio-link" to="/portfolio">
                    <FontAwesomeIcon icon = {faFolderOpen} color = "#4d4d4e" onClick={() => setShowNav(false)} />
                </NavLink>
                <NavLink exact="true" activeclassname = "active" className = "contact-link" to="/contact">
                    <FontAwesomeIcon icon = {faEnvelope} color = "#4d4d4e" onClick={() => setShowNav(false)}/>
                </NavLink>
                <FontAwesomeIcon icon = {faClose} color="#ffd700" size = "3x" className="close-icon" onClick={() => setShowNav(false)} />
            </nav>
           
            <FontAwesomeIcon onClick={() => setShowNav(true)} icon={faBars} color="#ffd700" size="3x" className="hamburger-icon" />
        </div>
    )
}

export default Sidebar 