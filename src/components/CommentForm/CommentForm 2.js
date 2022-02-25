import "./CommentForm.scss";
import "../../App.scss";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import commentIcon from "../../assets/images/icons/add_comment.svg";

const CommentForm = () => {
  return (
    <section className="commentBox">
      <img className="commentBox__avatar" src={avatar}></img>
      <form className="commentBox__form" method="get">
        <label for="text">JOIN THE CONVERSATION</label>
        <textarea
          className="commentBox__text"
          name="text"
          placeholder="Add a new comment"
        ></textarea>
        <input className="commentBox__button" type="submit" value="COMMENT" />
        <img className="commentBox__button--icon" src={commentIcon}></img>
      </form>
    </section>
  );
};

export default CommentForm;
