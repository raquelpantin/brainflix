import "./VideoInfo.scss";
import viewsIcon from "../../assets/images/icons/views.svg";
import likesIcon from "../../assets/images/icons/likes.svg";

export default function VideoInfo({ currentVideo }) {
  return (
    <section className="current-video">
      <h1 className="current-video__title">{currentVideo.title}</h1>
      <div className="current-video__container">
        <div className="current-video__container-left">
          <h2 className="current-video__channel">By {currentVideo.channel}</h2>
          <p className="current-video__date">
            {new Date(currentVideo.timestamp).getMonth() +
              1 +
              "/" +
              new Date(currentVideo.timestamp).getDate() +
              "/" +
              new Date(currentVideo.timestamp).getFullYear()}
          </p>
        </div>
        <div className="current-video__container-right">
          <div className="current-video__views-container">
            <img className="current-video__views--icon" src={viewsIcon}></img>
            <p className="current-video__views">{currentVideo.views}</p>
          </div>
          <div className="current-video__likes-container">
            <img className="current-video__likes--icon" src={likesIcon}></img>
            <p className="current-video__likes">{currentVideo.likes}</p>
          </div>
        </div>
      </div>
      <p className="current-video__description">{currentVideo.description}</p>
      <p className="current-video__comment-count">
        {currentVideo.comments.length} Comments
      </p>
    </section>
  );
}
