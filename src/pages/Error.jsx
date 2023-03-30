import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Error.css";

function Error() {
  return (
    <>
      <Header />
      <main className="error">
        <p className="code-error">404</p>
        <p className="text-error">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <p className="redirect-link">
          <a href="http://localhost:3000/">Retourner sur la page d'accueil</a>
        </p>
      </main>
      <Footer />
    </>
  );
}

export default Error;
