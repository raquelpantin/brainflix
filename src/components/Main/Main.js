import VideoPlayer from "../VideoPlayer/VideoPlayer";
import VideoInfo from "../VideoInfo/VideoInfo";
import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList";
import VideoList from "../VideoList/VideoList";
import "./Main.scss";

export default function Main({ videoData, currentVideo, comments }) {
  return (
    <main>
      <VideoPlayer currentVideo={currentVideo} />
      <div className="info__container">
        <div className="info__container-left">
          <VideoInfo currentVideo={currentVideo} comments={comments} />
          <CommentForm />
          <CommentList currentVideo={currentVideo} comments={comments} />
        </div>
        <VideoList videoData={videoData} currentVideo={currentVideo} />
      </div>
    </main>
  );
}
