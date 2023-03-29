import Carousel from "../components/Carousel";
import Collapse from "../components/Collapse";
import Host from "../components/Host";
import Tags from "../components/Tags";
import Rating from "../components/Rating";
import "../styles/Sheet.css";

function Sheet({ accommodation }) {
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
