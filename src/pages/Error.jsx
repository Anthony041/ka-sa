import { Link } from "react-router-dom";
import "../styles/Error.css";

function Error() {
  return (
    <main className="error">
      <p className="code-error">404</p>
      <p className="text-error">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <div className="redirect-link">
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
    </main>
  );
}

export default Error;
