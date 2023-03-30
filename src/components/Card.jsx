import "../styles/Card.css";

function Card({ cover, title }) {
  return (
    <a
    href="http://localhost:3000/"
    className="card">
      <img src={cover} alt={title} />
      <p>{title}</p>
    </a>
  );
}

export default Card;
