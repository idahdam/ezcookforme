import React from 'react';
import { Link } from 'react-router-dom'
import './index.css'
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
  function scrollWin() {
    window.scrollTo(0, 0); 
  }
  
  return(
    <>
      <div className="footer-row">
        <div className="footer-column left">
          <p className="column-title">
            EZCOOKFORME
          </p>
          <ul>
            <li><Link to='/' onClick={scrollWin} className="column-contents">Home</Link></li>
            <li><Link to='/recipes' onClick={scrollWin} className="column-contents">Recipes</Link></li>
            <li><Link to='/admin' onClick={scrollWin} className="column-contents">Admin</Link></li>
            <li><Link to='/aboutus' onClick={scrollWin} className="column-contents">About Us</Link></li>
          </ul>
        </div>
        <div className="footer-column middle">
          <p className="column-title">
            Socials
          </p>
          <div className="footer-row">
            <div className="column-social">
              <ul className="social-list">
                <li><a href='https://instagram.com/fakhri_mfn' target="_blank" rel="noopener noreferrer" className="column-contents"><FaInstagram className="insta"/> fakhri_mfn</a></li>
                <li><a href='https://instagram.com/fatmaaputrii' target="_blank" rel="noopener noreferrer" className="column-contents"><FaInstagram className="insta"/> fatmaaputrii</a></li>
              </ul>
            </div>
            <div className="column-social">
              <ul className="social-list">
                <li><a href='https://instagram.com/pindika_kian' target="_blank" rel="noopener noreferrer" className="column-contents"><FaInstagram className="insta"/> pindika_kian</a></li>
                <li><a href='https://instagram.com/idahdam' target="_blank" rel="noopener noreferrer" className="column-contents"><FaInstagram className="insta"/> idahdam</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-column right">
          <p className="column-title">
            About Us:
          </p>
          <p className="column-contents">
            EZCOOKFORME is a website built by homecooks to inspire other homecooks on cooking by yourself is as easy as lifting your finger.
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer;