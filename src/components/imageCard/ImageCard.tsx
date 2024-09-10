import "../../styles.scss";
import { type gameImage } from "../../App";
type ImageCardType = {
  imagesArray: gameImage[];
  flip: (image: gameImage) => void;
};

export const ImageCard = ({ imagesArray, flip }: ImageCardType) => {
  return (
    <>
      {imagesArray.map(({ id, img, flipped }) => {
        return flipped ? (
          <img className="image-card__img" key={id} src={img} alt="" />
        ) : (
          <button
            className="image-card__button"
            key={id}
            onClick={() => flip({ id, img, flipped })}
          ></button>
        );
      })}
    </>
  );
};
