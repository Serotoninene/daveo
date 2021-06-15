import React from 'react'

// STYLING
import './Button.css'

export default function Button(props){
    return(
        <div className = "Button relative">
            <a href="https://alexandrepujol.com/">{props.content}</a>
        </div>
    )
}