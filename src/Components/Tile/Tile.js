import React from 'react'

// STYLING
import '../../Utilitaries/Services.css'
import './Tile.css'

export default function Tile(props){
    return(
        <div className = "Tile flex">
            {props.children}
        </div>
    )
}