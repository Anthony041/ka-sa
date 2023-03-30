import accommodations from "./datas/logements.json";
import Home from "./pages/Home";
import Sheet from "./pages/Sheet";
import Error from "./pages/Error";
import About from "./pages/About";
import "./styles/index.css";

function App() {
  return (
    <>
      <Home />
      <Sheet accommodation={accommodations[2]} />
      <Error />
      <About />
    </>
  );
}

export default App;
