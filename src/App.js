import React, {useEffect} from 'react';

// GSAP COMPONENTS
import {gsap, Power3} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

// COMPONENTS
import Navbar from './Components/Navbar/Navbar';
import HeroBanner from './Components/HeroBanner/HeroBanner';
import BackgroundVideo from './Components/BackgroundVideo/BackgroundVideo';
import Overlay from './Components/Overlay/Overlay'
import Offers from './Components/Offers/Offers';
import HireMe from './Components/HireMe/HireMe';

//STYLING
import './App.css';
import './Components/Navbar/Navbar.css'

function App() {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    let tl = gsap.timeline({
        scrollTrigger : {
            trigger:'.HeroBanner ',
            start: 'top+=40px top',
            toggleActions : 'play none none reverse',
            id:'navbar',
        }
    })

    tl.fromTo('.slideNav',
        {
            y: -200,
        },
        {   
            backgroundColor: '#FFFFFF',
            display:'block',
            position: "fixed",
            ease: Power3.easeIn,
            duration: 0.8,
            y:0,
            zIndex: 2,
        }
    )
    
  }, [])
  return (
    <div>
      <div className="App">
        <Overlay />
        <div className = "slideNav hidden">
          <Navbar />
        </div>
        <Navbar />
        <BackgroundVideo />
        <HeroBanner />
        <Offers />
      </div>

      <div className = "media hidden">
          <HireMe />
        </div>
    </div>
  );
}

export default App;
