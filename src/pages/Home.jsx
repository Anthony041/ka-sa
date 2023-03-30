import Banner from "../components/Banner";
import CardList from "../components/CardList";

function Home() {
  return (
    <main>
      <Banner text={"Chez vous, partout et ailleurs"} page={"home"} />
      <CardList />
    </main>
  );
}

export default Home;
