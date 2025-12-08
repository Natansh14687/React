import { useState } from "react";
import { LOGO } from "../../utils/constants";

const Header = () => {
  const [toggleButton, setToggleButton] = useState("login");

  return (
    <header className="header">
      <div className="logoContainer">
        <img src={LOGO} className="logo" />
      </div>
      <div className="navListContainer">
        <ul className="navList">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Other</li>
          <li>
            <button
              className="login"
              onClick={() => {
                toggleButton === "login"
                  ? setToggleButton("logout")
                  : setToggleButton("login");
              }}
            >
              {toggleButton}
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
