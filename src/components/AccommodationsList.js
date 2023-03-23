import accommodationsList from "../datas/logements.json";
import Accommodation from "./Accommodation";
import "../styles/AccommodationsList.css";

function AccommodationsList() {
  return (
    <ul className="accommodations-list">
      {accommodationsList.map((accommodation) => (
        <Accommodation key={accommodation.id} cover={accommodation.cover} title={accommodation.title} />
      ))}
    </ul>
  );
}

export default AccommodationsList;
