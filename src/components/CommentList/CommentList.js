import Comment from "../Comment/Comment";
import "./CommentList.scss";

export default function CommentList({ currentVideo }) {
  return (
    <section className="commentlist__container">
      {currentVideo.comments.map((comment) => {
        return (
          <Comment
            key={comment.name}
            name={comment.name}
            text={comment.comment}
            date={comment.timestamp}
          />
        );
      })}
    </section>
  );
}
