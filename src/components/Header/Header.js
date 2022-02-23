import "./Header.scss";
import logo from "../../assets/images/logo/BrainFlix-logo.svg";

const Header = (props) => {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Brainflix Logo"></img>
    </header>
  );
};

export default Header;
