import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'

const HomeHeroComp = () => {
  return (
    <>
      <div className = "bg-home">
        <div className="home-hero-comp">
          <div className = "home-hero-text">
            <p>Dreamed of being a home cook?</p>
            <p>Starts today.</p>  
          </div>
        </div>
        <li><Link className ="links" to="/recipes"><button type="button" className="button-get-started" >Get Started</button></Link></li>
      </div>
    </>

  )
}

export default HomeHeroComp;