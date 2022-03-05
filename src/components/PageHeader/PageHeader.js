import { Link } from "react-router-dom";
import "./PageHeader.scss";
import logo from "../../assets/images/logo/BrainFlix-logo.svg";
import searchIcon from "../../assets/images/icons/search.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import upload from "../../assets/images/icons/upload.svg";

const PageHeader = () => {
  return (
    <header className="header">
      <Link to={"/"}>
        <img className="header__logo" src={logo} alt="Brainflix Logo"></img>
      </Link>
      <div className="header__container-all">
        <div className="header__search-container">
          <input
            className="header__searchbar"
            type="text"
            placeholder="Search"
          />
          <img
            className="header__search-icon"
            src={searchIcon}
            alt="search icon"
          ></img>
          <img className="header__avatar" src={avatar} alt="avatar"></img>
        </div>
        <Link to={"/upload"} className="header__upload-link">
          <div className="header__upload-container">
            <button className="header__button">UPLOAD</button>
            <img
              className="header__upload-icon"
              src={upload}
              alt="upload icon"
            ></img>
          </div>
        </Link>
        <img
          className="header__avatar--tablet-dt"
          src={avatar}
          alt="avatar"
        ></img>
      </div>
    </header>
  );
};

export default PageHeader;
