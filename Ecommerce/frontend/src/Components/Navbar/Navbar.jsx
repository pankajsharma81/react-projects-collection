import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.webp";
import cart_icon from "../../assets/cart_icon.png";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" height="50px" />
        <p>Shopify</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("home")}}>Home
            {menu==="home" ? <hr/>:<></>}
        </li>
        <li onClick={()=>{setMenu("mens")}}>Men
            {menu==="mens" ? <hr/>:<></>}
        </li>
        <li onClick={()=>{setMenu("womens")}}>Women
            {menu==="womens" ? <hr/>:<></>}
        </li>
        <li onClick={()=>{setMenu("kids")}}>Kids
            {menu==="kids" ? <hr/>:<></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="" height="40px" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
