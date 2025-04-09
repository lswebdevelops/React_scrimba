import React from "react";
import logo from '/images/logo_chef.png'

function Header() {
  
  return (

    <header className="header-1">
      <img  src={logo} alt="logo" className="image-logo" />
      <h1 className="h1-header">Chef Claude</h1>
    </header>
  )
}

export default Header;
