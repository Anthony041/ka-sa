import "../styles/Card.css";

function Card({ cover, title }) {
  return (
    <div className="card">
      <img src={cover} alt={title}></img>
      <p>{title}</p>
    </div>
  );
}

export default Card;
