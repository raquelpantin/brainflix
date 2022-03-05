import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Upload from "./pages/Upload/Upload";

function App() {
  return (
    <Router>
      <header>
        <Header />
      </header>
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/upload" component={Upload} />
          <Route path="/video/:videoID" component={Home} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;

// import { Component } from "react";
// import "./App.scss";
// import Main from "./components/Main/Main";
// import videoData from "./data/video-details.json";

// class App extends Component {
//   state = {
//     videoData: videoData,
//     currentVideo: videoData[0],
//   };

//   nextVideo = (id) => {
//     const nextVideoId = this.state.videoData.findIndex(
//       (video) => id === video.id
//     );
//     this.setState({
//       currentVideo: this.state.videoData[nextVideoId],
//     });
//   };

//   render() {
//     return (
//       <Main
//         videoData={this.state.videoData}
//         currentVideo={this.state.currentVideo}
//         nextVideo={this.nextVideo}
//       />
//     );
//   }
// }

// export default App;
