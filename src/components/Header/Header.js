import "./Header.scss";
import logo from "../../assets/images/logo/BrainFlix-logo.svg";
import searchIcon from "../../assets/images/icons/search.svg";

const Header = (props) => {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Brainflix Logo"></img>
      <input className="header__searchbar" placeholder="Search"></input>
      <img className="header__search-icon" src={searchIcon}></img>
    </header>
  );
};

export default Header;
