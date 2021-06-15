import React from "react"

import whiteShape from '../../Assets/Shapes/whiteShape.svg'
import greenShape from '../../Assets/Shapes/greenShape.svg'

// STYLING 
import '../../Utilitaries/Services.css'
import './Shapes.css'


export function WhiteShape(props){

    return (
        <div 
            className = "WhiteShape absolute"
            style= {{
                bottom : props.bottom,
                left: props.left,
            }}
            >
            <img src = {whiteShape} alt = "green Shape"></img>
        </div>
    )
} 

export function WhiteDonut(){
    
    return (
        <div className = "WhiteDonut absolute">
            
        </div>
    )
}
export function GreenShape(props){

    return (
        <div className = "absolute GreenShape"
            style= {{
                width : props.size, 
                bottom : props.bottom,
                left: props.left,
            }}
        >
            <img src = {greenShape} alt = "green Shape"></img>
        </div>
    )
} 

export function FirstBean(props){

    return (
        <svg 
            className = "FirstBean absolute"
            style = {{
                top: props.top,
                left :props.left
            }} 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 37.49 37.19"
        >
            <path d="M18.83,2.84h0a11.39,11.39,0,0,0-16.08,1A.86.86,0,0,0,2.61,4,11.65,11.65,0,0,0,4.08,20.23L19.39,33.68a13.8,13.8,0,0,0,13.83,2.71c9.31-3.43.49-17.5.49-17.5Z" fill="#ff3781"/>
        </svg>
    )
}

export function SecondBean(props){

    return (
        <svg 
            className = "SecondBean absolute"
            style = {{
                top: props.top,
                left :props.left
            }} 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 62.09 53.53"
        >
            <path d="M34.11,49.32h0c8.19,6.1,19.47,5.51,25.05-1.36S62.12,30.8,54,24.77L27.79,5.23c-6.5-4.83-15-6.55-22-4.16C-3.47,4.81-.8,15.39,8.1,26.07S34.11,49.32,34.11,49.32Z" fill="#ff3781"/>
        </svg>
    )
}



export function PinkCircle(props){

    return (
        <div 
            className = "PinkCircle absolute" 
            style= {{
                width : props.size, 
                height: props.size,
                top : props.top,
                left: props.left
            }}>
        </div>
    )
}
