import React from "react";
import "./Header.css";
import MenuIcon from "../assets/menu-icon.png";
import AquavidLogo from "../assets/aquavid-logo.png";
import FormInput from "./FormInput";
import Upload from "../assets/upload.png";
import Ellipes from "../assets/pic-icon.png";
import Bell from "../assets/bell.png";
import Red from "../assets/red-circle.png";
import SmallEllipes from "../assets/small-ellipes.png";
import Phantom from "../assets/phantom.png";
import PhanStand from "../assets/phantom-stand.png";

function Header() {
  return (
    <header className="header">
      <div>
        <div className="header-logos-container">
          <div className="menu-aquavid-icon">
            <img src={MenuIcon} className="menu-icon" />
            <img src={AquavidLogo} className="aquavid-icon" />
            <FormInput placeholder="search" className="form-input" />
            <img src={SmallEllipes} />
            <img src={Phantom} className="phantom" />
            <img src={PhanStand} className="phanstand" />
            <img src={Bell} />
            <img src={Red} />
            <img src={Ellipes} />
            <img src={Upload} className="upload" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
