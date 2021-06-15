import React from 'react'

// COMPONENTS


// ASSETS
    import videoBg from '../../Assets/Videos/videoplayback.mp4'

// STYLING
import '../../Utilitaries/Services.css'
import './BackgroundVideo.css'


export default function BackgroundVideo(){

    return (
        <div className = "BackgroundVideo absolute">

            <div className = "videoBg relative">
                <div className = "videoFilter absolute"></div>
                <video className = "video resp" autoPlay="autoplay"  loop preload="true" muted width="100%" height="100%">
                    <source src= {videoBg} type="video/mp4"/>
                </video>
            </div>

        </div>
    )

}