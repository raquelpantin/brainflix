import "./VideoInfo.scss";
import viewsIcon from "../../assets/images/icons/views.svg";
import likesIcon from "../../assets/images/icons/likes.svg";

export default function VideoInfo({ currentVideo }) {
  return (
    <section>
      <h1>{currentVideo.title}</h1>
      <div>
        <h2>{currentVideo.channel}</h2>
        <p>
          {new Date(currentVideo.timestamp).getMonth() +
            1 +
            "/" +
            new Date(currentVideo.timestamp).getDate() +
            "/" +
            new Date(currentVideo.timestamp).getFullYear()}
        </p>
      </div>
      <div>
        <div>
          <img src={viewsIcon}></img>
          <p>{currentVideo.views}</p>
        </div>
        <div>
          <img src={likesIcon}></img>
          <p>{currentVideo.likes}</p>
        </div>
      </div>
      <p>{currentVideo.description}</p>
      <p>{currentVideo.comments.length} Comments</p>
    </section>
  );
}
