import React from "react";
import { Link, Route } from 'react-router-dom'

import './Header.scss'

import HeaderLogo from "./Header__Logo/Header__Logo";
import HeaderCart from "./Header__Cart/Header__Cart";

const Header = () => {

  return (
    <div className="header">
      <div className="container">
        <Link to="/"><HeaderLogo /></Link>
        <Route exact path="/">
          <Link to="/cart"><HeaderCart /></Link>
        </Route>

      </div>
    </div>
  )
}

export default Header