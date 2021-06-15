import React, { useEffect } from 'react'

// GSAP COMPONENTS
import gsap, {Power3} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// SHAPES 
import { WhiteDonut, PinkCircle, GreenShape, WhiteShape, FirstBean, SecondBean } from '../Shapes/Shapes'

export default function Overlay(){

    // LOGIC FOR ALL THE PARALLAXES IS GONNA GO BELOW : s
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger : '.HeroBanner',
                start: "top top",
                id: 'paralax',
                toggleActions : 'play none none reverse',
                scrub: true,
            }
        })
        
        // ANIMATION OF THE WHITE DONUT 
        tl.to('.WhiteDonut',{
            y:100,
            x:-30,
            ease: Power3.easeOut
        }, 0)

        // ANIMATION OF THE TWO PINK CIRCLES
        tl.to('.PinkCircle', {
            x: -70,
            ease: Power3.easeOut
        }, 0)

        // ANIMATION OF THE TWO PINK BEANS
        tl.to('.FirstBean', {
            y: -700,
            ease: Power3.easeIn
        }, 0)

        tl.to('.SecondBean', {
            y: -700,
            ease: Power3.easeIn
        }, 0)

        // ANIMATION OF THE GREEN SHAPE
        tl.to('.GreenShape', {
            y: -500,
            ease: Power3.easeIn
        }, 0)

    }, [])

    return(
        <div className = "Overlay">
            
            <WhiteDonut />
            <PinkCircle size = "40px" top = "140px" left = "1050px"/>
            <PinkCircle size = "140px" top = "180px" left = "1200px"/>
            <GreenShape size = "200px" bottom = "0" left = "0"/>
            <WhiteShape bottom = "-170px" left = "0"/>
            <FirstBean left = "-10px" top = "86vh"/>
            <SecondBean left = "60vw" top = "120vh" />

        </div>
    )
}