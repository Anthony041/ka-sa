import accommodations from "../datas/logements.json";
import Header from "../components/Header";
import Home from "./Home";
import Sheet from "./Sheet";
import Error from "./Error";
import About from "./About";
import Footer from "../components/Footer";
import "../styles/index.css";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <div className="border"></div>
      <Sheet accommodation={accommodations[1]} />
      <div className="border"></div>
      <Error />
      <div className="border"></div>
      <About />
      <Footer />
    </div>
  );
}

export default App;
