import React from 'react'
import "./Header.css";
import MenuIcon from "../assets/menu-icon.png";
import AquavidLogo from "../assets/aquavid-logo.png";
import FormInput from './FormInput';
import Upload from "../assets/upload.png";
import Ellipes from "../assets/pic-icon.png";
import Bell from "../assets/bell.png";
import Red from "../assets/red-circle.png";
import SmallEllipes from "../assets/small-ellipes.png"


function Header() {
  return (
    <header className='header'>
    <div>
      <div className='header-logos-container'>
        <div className='menu-aquavid-icon'>
        <img src={MenuIcon} className='menu-icon'/>
        <img src={AquavidLogo} className='aquavid-icon'/>
        </div>        
        <FormInput placeholder="search" className="form-input"/>
        <div className='right-four-icons'>
          <img src={SmallEllipes} />
          <img src={Bell} />
          <img src={Red} />
          <img src={Ellipes}/>
          <img src={Upload}/>
        </div>
      </div>
     
    </div>
   </header>
  )
}

export default Header