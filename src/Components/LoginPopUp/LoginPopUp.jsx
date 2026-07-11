import { useState } from "react";
import "./LoginPopUp.css";
import { assets } from "../../assets/frontend_assets/assets";

const LoginPopUp = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign up");
  return (
    <div className="login-popup" onClick={() => setShowLogin(false)}>
      <form
        className="login-popup-container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img src={assets.cross_icon} onClick={() => setShowLogin(false)} />
        </div>
        <div className="login-popup-inputs">
          {currState === "Sign up" ? (
            <input type="text" placeholder="Enter Your Name" required />
          ) : (
            ""
          )}
          <input type="email" placeholder="Enter Your Email" required />
          <input type="password" placeholder="Enter Your Password" required />
        </div>
        <button type="submit">
          {currState === "Sign up" ? "Create Account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required id="agree" />
          <label htmlFor="agree">
            By Continuing , I Agree to The Terms of Use & Privacy Policy
          </label>
        </div>
        {currState === "Login" ? (
          <p>
            Create new account ?
            <span onClick={() => setCurrState("Sign up")}> Click Here</span>
          </p>
        ) : (
          <p>
            already have account ?
            <span onClick={() => setCurrState("Login")}> Click Here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopUp;
