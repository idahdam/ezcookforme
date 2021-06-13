import React from 'react'
import './index.css'
import SendokMakan from '../../../assets/Home/sendokmakan.jpg';
import Lemon from '../../../assets/Home/Lemon.png';
const HomeBody = ({identification}) => {
  return (
    <>
      {identification === '1' ? 
          <div className= "home-body">
            <div className="home-body-text">
              <div className="home-body-title">
                <h2>Home cooking at the tip
                of your fingers</h2>
              </div>
              <div className="home-body-writing">
                <p>It’s not hard to cook at home. As
                long as you have stove and stuff to
                cook for, it’s not a dream to become
                a home-chef!
                </p>
              </div>
            </div>
            <div className = "home-body-img">
              <img src={SendokMakan} alt="food" className="home-img" />
            </div>
          </div>
        :
          null
      }
      
      {identification === '2' ?
          <div className= "home-body">
            <div className = "home-body-img">
              <img src={Lemon} alt="food" className="home-img" />
            </div>
            <div className="home-body-text">
              <div className="home-body-title">
                <h2>Join the community
                of home-cooks</h2>
              </div>
              <div className="home-body-writing">
                <p>Want the world to witness your 
                amazing 3-course-meal menus?
                Submit your beloved menus by
                contacting us through email.
                </p>
                <a href="mailto:jurassimp18@gmail.com" className="emailus-link">
                  <button type = "button" className="button-emailus">Email Us</button>
                </a>
              </div>
            </div>
          </div>
        :
          null
        }
    </>
  )
}

export default HomeBody;