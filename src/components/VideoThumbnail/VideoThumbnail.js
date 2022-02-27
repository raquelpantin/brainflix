import "./VideoThumbnail.scss";

export default function VideoThumbnail({
  id,
  title,
  channel,
  image,
  nextVideo,
}) {
  return (
    <>
      <div className="video__card">
        <a
          className="video__link"
          onClick={() => {
            nextVideo(id);
          }}
          href="#root"
        >
          <img className="video__image" src={image} alt="Video Thumbnail"></img>
        </a>
        <div className="video__card-data">
          <a
            className="video__link-title"
            onClick={() => {
              nextVideo(id);
            }}
            href="#root"
          >
            <h3 className="video__title">{title}</h3>
          </a>
          <p className="video__channel">{channel}</p>
        </div>
      </div>
    </>
  );
}
