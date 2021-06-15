import React from 'react'

// COMPONENT
import Tiles from '../Tiles/Tiles'

// STYLING
import '../../Utilitaries/Services.css'
import './Offers.css'

export default function Offers(){
    return(
        <div className = "Offers">
            <div className = "Container flex">
                <h2>Mes Compétences</h2>
                <p> Jeune développeur de Toulouse, je me suis découvert une passion pour le développement web il y a deux ans qui ne m'a pas laché depuis. 
                Grâce à un parcours atypique, j'ai pu apprendre de nombreuses connaissances qui font aujourd'hui de moi un asset autonome et polyvalent à rajouter à une équipe.</p>

                <Tiles/>
                
            </div>
        </div>
    )
}