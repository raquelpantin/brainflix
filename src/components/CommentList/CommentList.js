import { Component } from "react";
import Comments from "../../data/video-details.json";
import "./CommentList.scss";
import "../../App.scss";

class CommentList extends Component {
  state = { comments: Comments };
  // JS code here

  render() {
    return (
      <>
        {this.state.comments.map((comment) => (
          <article>
            <img></img>
            <div>
              <ul>
                <li></li>
                <li></li>
              </ul>
              <p>{comment.title}</p>
            </div>
          </article>
        ))}
      </>
    );
  }
}

export default CommentList;
