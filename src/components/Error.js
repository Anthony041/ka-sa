import "../styles/Error.css";

function Error() {
    return (
      <div className="error">
        <p className="code-error">404</p>
        <p className="text-error">Oups! La page que vous demandez n'existe pas.</p>
        <p className="redirect-link"><a href="http://localhost:3000/">Retourner sur la page d'accueil</a></p>
      </div>
    );
  }
  
  export default Error;