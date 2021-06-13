import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './index.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'
import { GrSearch } from 'react-icons/gr'
import { GiCancel } from 'react-icons/gi'
// import LoginButton from '../Auth0Testing/login-button'
// import LogoutButton from '../Auth0Testing/logout-button'
import AuthNav from '../Auth0Testing/authnav'
import Logo from '../../assets/logo.png';


const Header = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [Navbar, setNavbar] = useState(true);
  const [Search, setSearch] = useState(true);
  const [param, setParam] = useState('');
  const history = useHistory();
  
  const handleToSearch = () => {
    history.push(`/search/${param}`);
  }

  const handleKeypress = e => {       
    if (e.key === 'Enter') {      
      handleToSearch();  
    }  
  };
  

  const changeSearchSymbol = () => {
    setSearch(false)
  }

  const changeCancelSymbol = () => {
    setSearch(true)
  }
  
  function scrollWin() {
    window.scrollTo(0, 0); 
  }

  
  const changeBackground = () => {
    if (window.scrollY>=120)
    {
      setNavbar(false);
    }else {
      setNavbar(true);
    }
  }
  const cancelCourse = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    ); 
    setParam('');
  }
  const changeShowLinks = () => {
    if (window.innerWidth >= 1200)
    {
        setShowLinks(false);
    }
  }
  window.addEventListener('resize', changeShowLinks)
  window.addEventListener('scroll', changeBackground)
  

  return(
    <div className= "topNav" id = {Navbar ? "" : "scroll"}>
      <a className="active" href="/">EZCOOKFORME</a>
      <img src={Logo}  className = "foto-logo-ezcook" id = "image-logo" alt="test"/>
      <div className = "buttons" id = {showLinks ? "hidden" : ""}>
        <li><Link className ="links" to="/" onClick={scrollWin}>Home</Link></li>
        <li><Link className ="links" to="/recipes" onClick={scrollWin}>Recipes</Link></li>
        <li><Link className ="links" to="/aboutus" onClick={scrollWin}>About Us</Link></li>
      </div>

      <button  className = "clickmedaddy" onClick={()=> setShowLinks(!showLinks)} >
        {showLinks ? <span className = "closebutton"><GrClose/></span>  :  <span className = "burgerbutton"><GiHamburgerMenu/></span>}
      </button>


      <div className= "searchbar">
        <div className= "input-background" onKeyPress={handleKeypress} onFocus={changeSearchSymbol} >
            <input 
              type="text" 
              placeholder="Search recipe or ingredients here..." 
              onChange={(e) => setParam(e.target.value)}
              onKeyPress={handleKeypress}
              // onKeyPress={handleKeypress}
              name="search" 
              id = "create-course-form"
              className="searchbar-font"
              onBlur={changeCancelSymbol}/>
            {Search ?  
              <button type = "button" className = "search-button" onClick={handleToSearch} id = "enter-search">
                <GrSearch/>
              </button>   : <button type = "button" className = "search-button" onClick={cancelCourse} id = "enter-search">
                <GiCancel/>
              </button>
              }
            
        </div>
          
        <AuthNav />
        {/* {showLog ? <button className = "buttonlogin" onClick={()=> setShowLog(!showLog)}><LoginButton /></button>  :  
        <button className = "buttonlogout" onClick={()=> setShowLog(!showLog)}><LogoutButton /></button>
        } */}
      </div>
    </div>
  ) 
}

export default Header;