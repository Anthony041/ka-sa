import logo from "../assets/red-logo.png";
import smallLogo from "../assets/small-red-logo.png";
import "../styles/Header.css";

function Header() {
  return (
    <header>
      <img className="normal-logo" src={logo} alt="red Kasa logo" />
      <img className="small-logo" src={smallLogo} alt="red Kasa logo" />
      {/* pas de fond gris cardlist + card toute la largeur de la page donc pas de padding cardlist + texte chez nous (...) 24px */}
      <ul>
        <li>
          <a href="http://localhost:3000/">Accueil</a>
        </li>
        <li>
          <a href="http://localhost:3000/">A propos</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
