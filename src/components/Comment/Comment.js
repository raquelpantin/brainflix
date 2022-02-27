import "./Comment.scss";

export default function Comment({ name, text, date }) {
  return (
    <div className="user__container">
      <div className="user__avatar"></div>
      <div className="user__comment-container">
        <ul className="user__data">
          <li className="user__name">{name}</li>
          <li className="user__date">
            {new Date(date).getMonth() +
              1 +
              "/" +
              new Date(date).getDate() +
              "/" +
              new Date(date).getFullYear()}
          </li>
        </ul>
        <p className="user__comment">{text}</p>
      </div>
    </div>
  );
}
