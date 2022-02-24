import Header from "./components/Header/Header.js";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer.js";
import videos from "./data/videos.json";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <VideoPlayer videos={videos} />
    </>
  );
}

export default App;
