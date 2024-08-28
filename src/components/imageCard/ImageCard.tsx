import { useEffect, useState } from "react";
import "../../styles.scss";
// import "../../assets/asd.jpg";
type ImageCardType = {
  shuffledImages: string[];
};
const asd = "../../assets/asd.jpg";
export const ImageCard = ({ shuffledImages }: ImageCardType) => {
  const [flippedIndex, setFlippedIndex] = useState<number>();
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <>
      {shuffledImages.map((image, i) => {
        return (
          <div className="image-card" key={i}>
            <button
              className="image-card__button"
              onClick={() => setFlippedIndex(i)}
            >
              {flippedIndex === i ? (
                <img className="image-card__img" src={image} alt="image" />
              ) : (
                <img className="image-card__img" src={asd} alt="image" />
              )}
            </button>
          </div>
        );
      })}
    </>
  );
};
