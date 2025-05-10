import React from 'react'
import "./Header.css";
import MenuIcon from "../assets/menu-icon.png";

function Header() {
  return (
    <header className='header'>
    <div>
      <img src={MenuIcon}/>
    </div>
   </header>
  )
}

export default Header