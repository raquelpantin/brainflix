import "./VideoPlayer.scss";

export default function VideoPlayer({ currentVideo }) {
  return (
    <section className="current-video__container">
      <video
        className="current-video__video"
        poster={currentVideo.image}
        controls
      >
        <source src={currentVideo.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}
