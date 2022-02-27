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
        <img
          className="video__image"
          src={image}
          alt="Video Thumbnail"
          onClick={() => {
            nextVideo(id);
          }}
        ></img>
        <div className="video__card-data">
          <h3 className="video__title">{title}</h3>
          <p className="video__channel">{channel}</p>
        </div>
      </div>
    </>
  );
}
