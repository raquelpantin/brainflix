import "./Comment.scss";

export default function Comment({ name, text, date }) {
  return (
    <>
      <div>Avatar would go here</div>
      <div>
        <ul>
          <li>{name}</li>
          <li>
            {new Date(date).getMonth() +
              1 +
              "/" +
              new Date(date).getDate() +
              "/" +
              new Date(date).getFullYear()}
          </li>
        </ul>
        <p>{text}</p>
      </div>
    </>
  );
}
