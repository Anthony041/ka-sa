import { Link } from "react-router-dom";
import "../styles/Card.css";

function Card({ accommodation }) {
  return (
    <Link className="card" to="/sheet">
      <img src={accommodation.cover} alt={accommodation.title} />
      <p>{accommodation.title}</p>
    </Link>
  );
}

export default Card;
