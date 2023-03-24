import "../styles/index.css";
import Header from "./Header";
import Banner from "./Banner";
import CardList from "./CardList";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Banner />
        <CardList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
