import { useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("app");

  return (
    <div className="navbar">
      <img src={assets.logo} alt="Logo" className="logo" />
      <ul className="navbar-menu">
        <Link
          to="/"
          className={menu === "home" ? "active" : ""}
          onClick={() => setMenu("home")}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          className={menu === "menu" ? "active" : ""}
          onClick={() => setMenu("menu")}
        >
          Menu
        </a>
        <a
          href="#app-download"
          className={menu === "app" ? "active" : ""}
          onClick={() => setMenu("app")}
        >
          Mobile-app
        </a>
        <a
          href="#footer"
          className={menu === "contact" ? "active" : ""}
          onClick={() => setMenu("contact")}
        >
          Contact Us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} className="search" />
        <div className="navbar-cart-icon">
          <img src={assets.basket_icon} className="basket" />
          <div className="dot"></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
