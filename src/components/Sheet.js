import Carousel from "./Carousel";
import Collapse from "./Collapse";
import Host from "./Host";
import Tags from "./Tags";
import Rating from "./Rating";
import "../styles/Sheet.css";

function Sheet({ accommodation }) {
  var isDesktop = false;
  if (window.innerWidth > 767) {
    isDesktop = true;
  }
  return (
    <main>
      <Carousel accommodation={accommodation} />
      <div className="top-block">
        <div>
          <h1>{accommodation.title}</h1>
          <p>{accommodation.location}</p>
        </div>
        {isDesktop === true ? (
          <Host host={accommodation.host} />
        ) : (
          <Tags tags={accommodation.tags} />
        )}
      </div>
      <div className="bottom-block">
        {isDesktop === true ? (
          <>
            <Tags tags={accommodation.tags} />
            <Rating rating={accommodation.rating} />
          </>
        ) : (
          <>
            <Rating rating={accommodation.rating} />
            <Host host={accommodation.host} />
          </>
        )}
      </div>
      <div className="sheetCollapses">
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
