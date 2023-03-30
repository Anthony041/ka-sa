import accommodations from "../datas/logements.json";
import Card from "./Card";
import "../styles/CardList.css";

function CardList() {
  return (
    <div className="card-list">
      {/* pour chaque logement, on crée une card */}
      {accommodations.map((accommodation) => (
        <Card key={accommodation.id} accommodation={accommodation} />
      ))}
    </div>
  );
}

export default CardList;
