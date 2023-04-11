import accommodations from "../datas/logements.json";
import Banner from "../components/Banner";
import Card from "../components/Card";
import "../styles/Home.css";

function Home() {
  return (
    <main>
      <Banner text={"Chez vous, partout et ailleurs"} page={"home"} />
      <div className="card-list">
        {/* pour chaque logement, on crée une card */}
        {accommodations.map((accommodation) => (
          <Card key={accommodation.id} accommodation={accommodation} />
        ))}
      </div>
    </main>
  );
}

export default Home;
