import { useState } from "react";
import arrow from "../assets/arrow.svg";
import "../styles/Collapse.css";

function Collapse({ title, textType, text }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="collapse">
      <div
      className="title"
      onClick={() => isOpen ? (setIsOpen(false)) : (setIsOpen(true))}>
        <h2>{title}</h2>
        <img src={arrow} alt="arrow icon" />
      </div>

      {/* open/close collapse */}
      {isOpen ?
      (<div className="text">
        {textType === "paragraph" ?
          (<p>{text}</p>) :
          (<ul>{text.map((equipment) => (<li key={equipment}>{equipment}</li>))}</ul>)}
      </div>) :
      (null)}

    </div>
  );
}

export default Collapse;
