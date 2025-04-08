import React from "react";
import logo from '/images/mundi.png'
function Header() {
  return (

    <header className="header-1">
      <img src={logo} alt="logo" className="image-logo" />
      <h1 className="h1-header">my travel journal.</h1>
    </header>
  )
}

export default Header;
