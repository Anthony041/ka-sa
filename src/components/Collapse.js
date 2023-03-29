import { useState } from "react";
import arrow from "../assets/arrow.svg";
import "../styles/Collapse.css";

function Collapse({ title, textType, text }) {
  const [isOpen, setIsOpen] = useState(false);
  return (

    // titre et icones
    <div className="collapse">
      <div
        className="title"
        onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
      >
        <h2>{title}</h2>
        <img
          src={arrow}
          alt="arrow icon"
          className={isOpen ? "open-collapse" : "closed-collapse"}
        />
      </div>

      {/* texte à afficher ou non en fonction de l'état de la collapse */}
      {isOpen ? (
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
      ) : null}
    </div>
  );
}

export default Collapse;
