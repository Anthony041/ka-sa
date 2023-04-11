import { Link, useLocation } from "react-router-dom";
import logo from "../assets/red-logo.png";
import smallLogo from "../assets/small-red-logo.png";
import "../styles/Header.css";

function Header() {
  const location = useLocation();

  return (
    <header>
      {/* affichage de l'un ou l'autre des logos en fonction de la taille de l'écran */}
      {window.innerWidth > 767 ? (
        <img className="normal-logo" src={logo} alt="red Kasa logo" />
      ) : (
        <img className="small-logo" src={smallLogo} alt="red Kasa logo" />
      )}

      <nav>
        <li>
          <Link className={location.pathname === "/" ? "underline" : ""} to="/">
            Accueil
          </Link>
        </li>
        <li>
          <Link
            className={location.pathname === "/about" ? "underline" : ""}
            to="/about"
          >
            A propos
          </Link>
        </li>
      </nav>
    </header>
  );
}

export default Header;
