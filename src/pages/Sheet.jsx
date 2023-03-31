import { useParams, Navigate } from "react-router-dom";
import accommodations from "../datas/logements.json";
import Carousel from "../components/Carousel";
import Collapse from "../components/Collapse";
import Host from "../components/Host";
import Tags from "../components/Tags";
import Rating from "../components/Rating";
import "../styles/Sheet.css";

function Sheet() {
  const { id } = useParams();
  const accommodation = accommodations.find((element) => element.id === id);

  // redirection vers la page d'erreur si un utilisateur modifiait l'id de la page /sheet en indiquant un id n'existant pas
  if (!accommodation) {
    return <Navigate to="/error" />;
  }

  return (
    <main>
      <Carousel accommodation={accommodation} />

      <div className="sheet-blocks">
        <div className="sheet-first-block">
          <h1>{accommodation.title}</h1>
          <p>{accommodation.location}</p>
          <Tags tags={accommodation.tags} />
        </div>
        <div className="sheet-second-block">
          <Host host={accommodation.host} />
          <Rating rating={accommodation.rating} />
        </div>
      </div>

      <div className="sheet-collapses">
        <Collapse
          title={"Description"}
          textType={"paragraph"}
          text={accommodation.description}
        />
        <Collapse
          title={"Equipements"}
          textType={"item-list"}
          text={accommodation.equipments}
        />
      </div>
    </main>
  );
}

export default Sheet;
