import "./Header.scss";
import "../../App.scss";
import logo from "../../assets/images/logo/BrainFlix-logo.svg";
import searchIcon from "../../assets/images/icons/search.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import upload from "../../assets/images/icons/upload.svg";

const Header = () => {
  return (
    <header className="header">
      <a href="../../App.js">
        <img className="header__logo" src={logo} alt="Brainflix Logo"></img>
      </a>
      <div className="header__container-all">
        <div className="header__search-container">
          <input
            className="header__searchbar"
            type="text"
            placeholder="Search"
          />
          <img className="header__search-icon" src={searchIcon}></img>
          <img className="header__avatar" src={avatar}></img>
        </div>
        <div className="header__upload-container">
          <button className="header__button">UPLOAD</button>
          <img className="header__upload-icon" src={upload}></img>
        </div>
        <img className="header__avatar--tablet-dt" src={avatar}></img>
      </div>
    </header>
  );
};

export default Header;
