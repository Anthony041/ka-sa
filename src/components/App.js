import "../styles/index.css";
import Header from "./Header";
import Home from "./Home";
import Sheet from "./Sheet";
import Error from "./Error";
import About from "./About";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <div className="border"></div>
      <Sheet />
      <div className="border"></div>
      <Error />
      <div className="border"></div>
      <About />
      <Footer />
    </div>
  );
}

export default App;
