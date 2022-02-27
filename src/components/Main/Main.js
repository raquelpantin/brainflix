import Header from "../Header/Header";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import VideoInfo from "../VideoInfo/VideoInfo";
import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList";
import VideoList from "../VideoList/VideoList";
import "./Main.scss";

export default function Main({ videoData, currentVideo, nextVideo }) {
  return (
    <main>
      <Header />
      <VideoPlayer currentVideo={currentVideo} />
      <div className="info__container">
        <div className="info__container-left">
          <VideoInfo currentVideo={currentVideo} />
          <CommentForm />
          <CommentList currentVideo={currentVideo} />
        </div>
        <VideoList
          nextVideo={nextVideo}
          videoData={videoData}
          currentVideo={currentVideo}
        />
      </div>
    </main>
  );
}
