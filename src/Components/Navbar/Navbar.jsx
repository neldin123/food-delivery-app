import { useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState("app");

  return (
    <div className="navbar">
      <img src={assets.logo} alt="Logo" className="logo" />
      <ul className="navbar-menu">
        <li
          className={menu === "home" ? "active" : ""}
          onClick={() => setMenu("home")}
        >
          Home
        </li>
        <li
          className={menu === "menu" ? "active" : ""}
          onClick={() => setMenu("menu")}
        >
          Menu
        </li>
        <li
          className={menu === "app" ? "active" : ""}
          onClick={() => setMenu("app")}
        >
          Mobile-app
        </li>
        <li
          className={menu === "contact" ? "active" : ""}
          onClick={() => setMenu("contact")}
        >
          Contact Us
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} className="search" />
        <div className="navbar-cart-icon">
          <img src={assets.basket_icon} className="basket" />
          <div className="dot"></div>
        </div>
        <button>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
