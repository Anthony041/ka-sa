import { useState } from "react";
import arrow from "../assets/arrow.svg";
import "../styles/Carousel.css";

function Carousel({ accommodation }) {
  const [imageNum, setImageNum] = useState(0);
  const imageMax = accommodation.pictures.length - 1;
  
  return (
    <div className="carousel">

      {/* affichage des boutons pour précédent et suivant du caroussel et du compteur en bas seumement s'il y a plus d'une image */}
      {imageMax > 1 && (
        <>
          <img
            className="previous-image"
            src={arrow}
            alt="previous"
            onClick={() =>
              imageNum === 0 ? setImageNum(imageMax) : setImageNum(imageNum - 1)
            }
          />
          <img
            className="next-image"
            src={arrow}
            alt="next"
            onClick={() =>
              imageNum === imageMax ? setImageNum(0) : setImageNum(imageNum + 1)
            }
          />
          <div className="image-number">
            {imageNum + 1}/{imageMax + 1}
          </div>
        </>
      )}

      <img
        className="carousel-image"
        src={accommodation.pictures[imageNum]}
        alt="pictures of the accommodation"
      />
      
    </div>
  );
}

export default Carousel;
