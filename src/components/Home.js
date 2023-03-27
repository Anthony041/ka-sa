import Banner from "./Banner";
import CardList from "./CardList";

function Home() {
  return (
    <main>
      <Banner text={"Chez vous, partout et ailleurs"} page={"home"} />
      <CardList />
    </main>
  );
}

export default Home;
