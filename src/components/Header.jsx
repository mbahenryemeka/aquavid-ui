import React from 'react'
import "./Header.css";
import MenuIcon from "../assets/menu-icon.png";
import AquavidLogo from "../assets/aquavid-logo.png";

function Header() {
  return (
    <header className='header'>
    <div>
      <img src={MenuIcon}/>
      <img src={AquavidLogo}/>
    </div>
   </header>
  )
}

export default Header