import { useState } from "react";
import "../../styles.scss";
import { getRandomImg } from "../../gameImages";
import lodash from "lodash.shuffle";

type gameImage = { id: number; img: string; flipped: boolean };

const createImageList = (images: string[]): gameImage[] => {
  const doubledImages = lodash([...images, ...images]);
  const imagesArray = doubledImages.map((img, id) => ({
    id: id,
    img: img,
    flipped: false,
  }));
  return imagesArray;
};
export const ImageCard = () => {
  const images = createImageList(getRandomImg());
  const [imagesArray, setImagesArray] = useState<gameImage[]>(images);
  const [prevImage, setPrevImage] = useState<gameImage | null>();

  const flip = (image: gameImage) => {};
  return (
    <>
      {imagesArray.map(({ img, id, flipped }) => {
        flipped ? (
          <img key={id} src={img} alt="" />
        ) : (
          <button key={id} onClick={() => flip({ id, img, flipped })}></button>
        );
      })}
    </>
  );
};
