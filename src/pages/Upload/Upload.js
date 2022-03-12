import "./Upload.scss";
import { Link } from "react-router-dom";
import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import publishIcon from "../../assets/images/icons/publish.svg";
import React from "react";

export default class Upload extends React.Component {
  state = {
    title: "",
    description: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  isTitleValid = () => {
    if (this.state.title.length < 1) {
      return false;
    } else {
      return true;
    }
  };

  isDescriptionValid = () => {
    if (this.state.description.length < 1) {
      return false;
    } else {
      return true;
    }
  };

  isFormValid = () => {
    if (!this.state.title || !this.state.description) {
      return false;
    }
    if (!this.isTitleValid()) {
      return false;
    }
    if (!this.isDescriptionValid()) {
      return false;
    } else {
      return true;
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.isFormValid()) {
      alert("Upload Successful! Redirecting back to the Home Page");
      this.props.history.push("/");
    } else {
      alert("Upload must have a Title and Description");
    }
  };

  render() {
    return (
      <section className="upload">
        <h1 className="upload__title">Upload Video</h1>
        <form onSubmit={this.handleSubmit} className="upload__form">
          <div className="upload__container">
            <div className="upload__thumbnail">
              <label className="upload__label-thumbnail">VIDEO THUMBNAIL</label>
              <img
                className="upload__thumbnail-image"
                src={thumbnail}
                alt="thumbnail"
              />
            </div>
            <div className="upload__input">
              <div className="upload__input-container">
                <label className="upload__label" htmlFor="title">
                  TITLE YOUR VIDEO
                </label>
                <input
                  className="upload__input-title"
                  name="title"
                  onChange={this.handleChange}
                  value={this.state.title}
                  placeholder="Add a title to your video"
                ></input>
              </div>
              <div className="upload__description-container">
                <label className="upload__label" htmlFor="description">
                  ADD A VIDEO DESCRIPTION
                </label>
                <textarea
                  className="upload__input-description"
                  name="description"
                  onChange={this.handleChange}
                  value={this.state.description}
                  placeholder="Add a description to your video"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="upload__button-container">
            <Link className="upload__cancel--link" to={"/"}>
              <p className="upload__cancel-tablet">CANCEL</p>
            </Link>
            <div className="upload__button-icon--position">
              <button className="upload__button" type="submit">
                PUBLISH
              </button>
              <img
                className="upload__button-icon"
                src={publishIcon}
                alt="publish icon"
              />
            </div>
            <Link className="upload__cancel--link" to={"/"}>
              <p className="upload__cancel">CANCEL</p>
            </Link>
          </div>
        </form>
      </section>
    );
  }
}
