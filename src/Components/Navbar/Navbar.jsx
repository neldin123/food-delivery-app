import { assets } from "../../assets/frontend_assets/assets";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={assets.logo} alt="Logo" className="logo" />
      <ul className="navbar-menu">
        <li>Home</li>
        <li>Menu</li>
        <li>Mobile-app</li>
        <li>About</li>
      </ul>
    </div>
  );
};

export default Navbar;
