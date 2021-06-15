import React from 'react'

// COMPONENTS 
import Button from '../Button/Button'

// FONT AWESOME COMPONENTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

// ASSETS
import daveoLogo from '../../Assets/Logos/daveoLogo.svg'

// STYLING
import '../../Utilitaries/Services.css'
import './Navbar.css'

export default function Navbar(){

    return(
        <div className = "Navbar absolute">
            <div className = "Container flex">
                <div className = "Logo">
                    <img className = "resp" src = {daveoLogo} alt = "Logo de daveo"></img>
                </div>

                <div className = "Navlinks flex">
                    <a href = "https://alexandrepujol.com/"> Culture <FontAwesomeIcon icon= {faAngleDown}/></a>
                    <a href = "https://alexandrepujol.com/"> Nos offres <FontAwesomeIcon icon= {faAngleDown}/></a>
                    <a href = "https://alexandrepujol.com/"> Nos publications</a>
                    <a href = "https://alexandrepujol.com/"> Blog </a>
                    <a href = "https://alexandrepujol.com/"> Nous rejoindre <FontAwesomeIcon icon= {faAngleDown}/></a>
                </div>

                <div className = "Reseaux flex">
                    <Button content = "Voir portfolio" />
                    <div className = " RSContainer flex">
                        <a href = "https://www.linkedin.com/in/alexandre-pujol-333172b3/"> 
                            <div className = "RS flex">
                                <FontAwesomeIcon icon = {faLinkedin} />
                            </div>
                        </a>
                        <a href = "https://www.instagram.com/serotoninene/"> 
                            <div className = "RS flex">
                                <FontAwesomeIcon icon = {faInstagram} />
                            </div>
                        </a>
                        <a href = "https://github.com/Serotoninene"> 
                            <div className = "RS flex">
                                <FontAwesomeIcon icon = {faGithub} />
                            </div>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}