import Header from "./components/Header/Header.js";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer.js";
import CommentForm from "./components/CommentForm/CommentForm.js";
import CommentList from "./components/CommentList/CommentList.js";
import "./App.css";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <VideoPlayer />
        <CommentForm />
        <CommentList />
      </>
    );
  }
}

export default App;
