import { assets } from "../../assets/frontend_assets/assets";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            aspernatur repudiandae minus expedita id fugit officia magnam
            praesentium unde distinctio? Culpa velit est asperiores incidunt
            omnis. Doloribus sit quasi deleniti Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Velit nisi debitis quisquam rem.
            Expedita, iusto eius eveniet
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="facebook" />
            <img src={assets.twitter_icon} alt="twitter" />
            <img src={assets.linkedin_icon} alt="linkedIn" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get in touch</h2>
          <ul>
            <li>+0123456789</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2026 @<span> Tomato.com</span> - All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
