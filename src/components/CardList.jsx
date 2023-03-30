import accommodations from "../datas/logements.json";
import Card from "./Card";
import "../styles/CardList.css";

function CardList() {
  return (
    <div className="card-list">

      {/* pour chaque logement, on crée une card */}
      {accommodations.map((accommodation) => (
        <Card key={accommodation.id} cover={accommodation.cover} title={accommodation.title} />
      ))}
    </div>
  );
}

export default CardList;
