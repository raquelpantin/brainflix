import "./Comment.scss";

export default function Comment({ name, text, date }) {
  return (
    <>
      <div>Avatar</div>
      <div>
        <ul>
          <li>{name}</li>
          <li>{date}</li>
        </ul>
        <p>{text}</p>
      </div>
    </>
  );
}
