import { LOGO } from "../../utils/constants";

const Header = () => (
  <header className="header">
    <div className="logoContainer">
      <img
        src={LOGO}
        className="logo"
      />
    </div>
    <div className="navListContainer">
      <ul className="navList">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Other</li>
      </ul>
    </div>
  </header>
);

export default Header;