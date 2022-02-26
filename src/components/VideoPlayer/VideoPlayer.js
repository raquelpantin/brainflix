import "./VideoPlayer.scss";

export default function VideoPlayer({ currentVideo }) {
  return (
    <section>
      <video poster={currentVideo.image} width="320" height="240" controls>
        <source src={currentVideo.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}
