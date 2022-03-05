import Comment from "../Comment/Comment";
import "./CommentList.scss";

export default function CommentList({ comments }) {
  return (
    <section className="commentlist__container">
      {comments.map((comment) => {
        return (
          <Comment
            key={comment.id}
            name={comment.name}
            text={comment.comment}
            date={comment.timestamp}
          />
        );
      })}
    </section>
  );
}
