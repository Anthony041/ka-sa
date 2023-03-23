import "../styles/Accommodation.css";

function Accommodation({ cover, title }) {
  return (
    <li className="accommodation">
      <img src={cover} alt={title}></img>
      <p>{title}</p>
    </li>
  );
}

export default Accommodation;
