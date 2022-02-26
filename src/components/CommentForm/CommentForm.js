import "./CommentForm.scss";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import commentIcon from "../../assets/images/icons/add_comment.svg";

const CommentForm = () => {
  return (
    <section className="commentBox">
      <img className="commentBox__avatar" src={avatar}></img>
      <form className="commentBox__form" method="get">
        <div className="commentBox__text-container">
          <label for="text">JOIN THE CONVERSATION</label>
          <textarea
            className="commentBox__text"
            name="text"
            placeholder="Add a new comment"
          ></textarea>
        </div>
        <div className="commentBox__button-container">
          <input className="commentBox__button" type="submit" value="COMMENT" />
          <img className="commentBox__button--icon" src={commentIcon}></img>
        </div>
      </form>
    </section>
  );
};

export default CommentForm;
