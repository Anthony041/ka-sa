import filled from "../assets/filled-star.png";
import empty from "../assets/empty-star.png";
import "../styles/Rating.css";

function Rating({ rating }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <img
        key={i}
        src={i <= rating ? filled : empty}
        alt={i <= rating ? "filled star" : "empty star"}
      />
    );
  }
  return <div className="rating">{stars}</div>;
}

export default Rating;
