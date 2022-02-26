import "./VideoThumbnail.scss";

export default function VideoThumbnail({ title, channel, image }) {
  return (
    <>
      <div className="video__card">
        <img className="video__image" src={image} alt="Video Thumbnail"></img>
        <div className="video__card-data">
          <h3 className="video__title">{title}</h3>
          <p className="video__channel">{channel}</p>
        </div>
      </div>
    </>
  );
}
