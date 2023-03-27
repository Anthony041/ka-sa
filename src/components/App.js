import "../styles/index.css";
import Header from "./Header";
import Home from "./Home";
import Sheet from "./Sheet";
import Error from "./Error";
import About from "./About";
import Footer from "./Footer";
import accommodations from "../datas/logements.json";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <div className="border"></div>
      <Sheet accommodation={accommodations[0]} />
      <div className="border"></div>
      <Error />
      <div className="border"></div>
      <About />
      <Footer />
    </div>
  );
}

export default App;
