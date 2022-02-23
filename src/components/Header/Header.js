import "./Header.scss";
import logo from "../../assets/images/logo/BrainFlix-logo.svg";
import searchIcon from "../../assets/images/icons/search.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import upload from "../../assets/images/icons/upload.svg";

const Header = (props) => {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Brainflix Logo"></img>
      <div className="header__search-container">
        <input className="header__searchbar" placeholder="Search" />
        <img className="header__search-icon" src={searchIcon}></img>
      </div>
      <img className="header__avatar" src={avatar}></img>
      <div className="header__upload-container">
        <button className="header__button">UPLOAD</button>
        <img className="header__upload-icon" src={upload}></img>
      </div>
    </header>
  );
};

export default Header;
