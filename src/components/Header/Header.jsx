import React from "react";

import './Header.scss'

import HeaderLogo from "./Header__Logo/Header__Logo";
import HeaderCart from "./Header__Cart/Header__Cart";

const Header = () => {

  return (
    <div className="header">
      <div className="container">
        <HeaderLogo />
        <HeaderCart />
      </div>
    </div>
  )
}

export default Header