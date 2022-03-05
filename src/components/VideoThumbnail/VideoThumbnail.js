import "./VideoThumbnail.scss";
import { Link } from "react-router-dom";

export default function VideoThumbnail({ id, title, channel, image }) {
  return (
    <>
      <div className="video__card">
        <Link to={`/video/${id}`} className="video__link">
          <img className="video__image" src={image} alt="Video Thumbnail"></img>
        </Link>
        <div className="video__card-data">
          <Link to={`/video/${id}`} className="video__link-title">
            <h3 className="video__title">{title}</h3>
          </Link>
          <p className="video__channel">{channel}</p>
        </div>
      </div>
    </>
  );
}
