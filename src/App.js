import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageHeader from "./components/PageHeader/PageHeader";
import Home from "./pages/Home/Home";
import Upload from "./pages/Upload/Upload";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <header>
        <PageHeader />
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
