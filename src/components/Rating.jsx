import filled from "../assets/filled-star.png";
import empty from "../assets/empty-star.png";
import "../styles/Rating.css";

function Rating({ rating }) {
  // création d'un tableau d'étoiles
  const stars = [];
  // on aura quoiqu'il arrive 5 étoiles
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <img
        key={i}
        // choix de l'étoile pleine ou de l'étoile vide en fonction de la note du logement
        src={i <= rating ? filled : empty}
        alt={i <= rating ? "filled star" : "empty star"}
      />
    );
  }
  return <div className="rating">{stars}</div>;
}

export default Rating;
