import Header from "../components/Header";
import Banner from "../components/Banner";
import CardList from "../components/CardList";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner text={"Chez vous, partout et ailleurs"} page={"home"} />
        <CardList />
      </main>
      <Footer />
    </>
  );
}

export default Home;
