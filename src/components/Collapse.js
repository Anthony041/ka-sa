import arrow from "../assets/arrow.png";
import "../styles/Collapse.css";

function Collapse({ title, textType, text }) {
  return (
    <div className="collapse">
      <div className="title">
        <h2>{title}</h2>
        <img src={arrow} alt="arrow icon" />
      </div>
      <div className="text">
        {textType === "paragraph" ? (
          <p>{text}</p>
        ) : (
          <ul>
            {text.map((equipment) => (
              <li key={equipment}>{equipment}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Collapse;
