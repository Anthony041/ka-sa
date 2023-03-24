import "../styles/index.css";
import Header from "./Header";
import Banner from "./Banner";
import CardList from "./CardList";
import Error from "./Error";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Banner />
        <CardList />
        <div className="border"></div>
        <Error />
        <div className="border"></div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
