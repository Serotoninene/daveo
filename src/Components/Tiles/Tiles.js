import React from 'react'

// COMPONENTS
import Tile from '../Tile/Tile'
import Button from '../Button/Button'

// ASSETS
import cloud from '../../Assets/Illustrations/cloud.png'
import agile from '../../Assets/Illustrations/agile.png'
import lego from '../../Assets/Illustrations/lego.png'
import product from '../../Assets/Illustrations/product.png'
import tech from '../../Assets/Illustrations/tech.png'

// STYLING
import '../../Utilitaries/Services.css'
import './Tiles.css'

export default function Tiles(props){
    return (
        <div className = "Tiles grid">
            <Tile>
                <div className = "Illustration">
                    <img alt = "illustration" src= {tech}></img>
                </div>
                <h1> Front End </h1>
                <p>Stack maitrisée : HTML, CSS, SCSS, Javascript, ReactJS, GSAP</p>
            </Tile>
            <Tile>
                <div className = "Illustration">
                    <img alt = "illustration" src= {agile}></img>
                </div>
                <h1> Back End </h1>
                <p> Stack maitrisée : PHP, MySQL, Apache, Nodejs, Symfony </p>
            </Tile>
            <Tile>
                <div className = "Illustration">
                    <img alt = "illustration" src= {product}></img>
                </div>
                <h1> Design </h1>
                <p>Adobe Suite(Photoshop, Illustrator, Adobe XD), Figma, Procreate </p>
            </Tile>
            <Tile>
                <div className = "Illustration">
                    <img alt = "illustration" src= {cloud}></img>
                </div>
                <h1> Soft Skills </h1>
                <p> Master en Marketing et Management, à l'aise avec le framework Agile</p>
            </Tile>
            <Tile>
                <div className = "Illustration">
                    <img alt = "illustration" src= {lego}></img>
                </div>
                <h1> Autre </h1>
                <p> Trilingue : Anglais, Espagnol, Français</p>
            </Tile>
            <Tile>
                <h2> Venez visiter </h2>
                <h2> mon portfolio ! </h2>
                <Button content = "Portfolio" />
            </Tile>
            


        </div>
    )
}