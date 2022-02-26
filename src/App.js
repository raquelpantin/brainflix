import { Component } from "react";
import Header from "./components/Header/Header.js";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer.js";
import VideoList from "./components/VideoList/VideoList.js";
import CommentForm from "./components/CommentForm/CommentForm.js";
import CommentList from "./components/CommentList/CommentList.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <VideoPlayer />
        <CommentForm />
        <CommentList />
        <VideoList />
      </>
    );
  }
}

export default App;
