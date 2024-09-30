import React from 'react'
import "./Hero.css"
import hand_icon from "../../assets/Assets/hand_icon.png"
import arrow_icon from "../../assets/Assets/arrow.png"
import hero_pro from "../../assets/Assets/hero_pro.png"

const Hero = () => {
  return (
    <div className ="hero">

        <div className = "hero-left">
          <h2>NEW ARRIVAL ONLY</h2>
         <div>
        <div className ="hero-hand-icon">
         <p>new collections</p>
         <img src ={hand_icon} alt =""/>
         </div>
         <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <img src ={arrow_icon} alt =""/>
        </div>
        </div>

        <div className = "hero-right">
            <img style ={{width:"360px"}} src ={hero_pro} alt =""/>
        </div>
      
    </div>
  )
}

export default Hero
