import Header from "./components/Header/Header.js";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer.js";
import videos from "./data/videos.json";
import CommentForm from "./components/CommentForm/CommentForm.js";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <VideoPlayer videos={videos} />
      <CommentForm />
    </>
  );
}

export default App;
