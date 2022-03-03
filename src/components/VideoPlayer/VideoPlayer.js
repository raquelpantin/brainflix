import "./VideoPlayer.scss";

export default function VideoPlayer({ currentVideo }) {
  return (
    <section className="videoplayer__container">
      <video
        className="videoplayer__video"
        poster={currentVideo.image}
        controls
      >
        {/* <source src={currentVideo.video} type="video/mp4" /> */}
        Your browser does not support the video tag.
      </video>
    </section>
  );
}
