import logo from "../assets/logo.png";
import "../styles/Header.css";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Kasa" />
      <ul>
        <li>
          <a href="http://localhost:3000/">Accueil</a>
        </li>
        <li>
          <a href="http://localhost:3000/">A propos</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
