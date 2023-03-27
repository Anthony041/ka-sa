import "../styles/Carousel.css";

function Carousel({ accommodation }) {
  return (
    <div className="carousel">
      <img src={accommodation.cover} alt="cover" />
    </div>
  );
}

export default Carousel;
