import arrow from "../assets/arrow.png";
import "../styles/Collapse.css";

function Collapse({ titre, texte }) {
  return (
    <div className="collapse" id={titre}>
      <div className="title">
        <h2>{titre}</h2>
        <img src={arrow} alt="arrow icon"></img>
      </div>
      <p>{texte}</p>
    </div>
  );
}

export default Collapse;
