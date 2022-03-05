import "./Upload.scss";
import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import publishIcon from "../../assets/images/icons/publish.svg";

export default function Upload() {
  return (
    <section className="upload">
      <h1 className="upload__title">Upload Video</h1>
      <form className="upload__form">
        <div className="upload__thumbnail">
          <label className="upload__label">VIDEO THUMBNAIL</label>
          <img
            className="upload__thumbnail-image"
            src={thumbnail}
            alt="thumbnail image"
          />
        </div>
        <div className="upload__input-container">
          <label className="upload__label" htmlFor="title">
            TITLE YOUR VIDEO
          </label>
          <input
            className="upload__input-title"
            name="title"
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
            placeholder="Add a description to your video"
          ></textarea>
        </div>
        <div className="upload__button-container">
          <button className="upload__button">PUBLISH</button>
          <img className="upload__button-icon" src={publishIcon} />
          <p className="upload__cancel">CANCEL</p>
        </div>
      </form>
    </section>
  );
}