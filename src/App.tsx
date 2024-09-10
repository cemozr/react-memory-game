import { useState } from "react";
import "./styles.scss";
import { ImageCard } from "./components/imageCard/ImageCard";
import { CardsSection } from "./components/cardsSection/CardsSection";
import { getRandomImg } from "./gameImages";
import lodash from "lodash.shuffle";
import { WinScreen } from "./components/winScreen/WinScreen";

export type gameImage = { id: number; img: string; flipped: boolean };

const createImageList = (images: string[]): gameImage[] => {
  const doubledImages = lodash([...images, ...images]);
  const imagesArray = doubledImages.map((img, id) => ({
    id: id,
    img: img,
    flipped: false,
  }));
  return imagesArray;
};

function App() {
  const images = createImageList(getRandomImg());
  const [imagesArray, setImagesArray] = useState<gameImage[]>(images);
  const [prevImage, setPrevImage] = useState<gameImage | null>();
  const [isWin, setIsWın] = useState<boolean>(false);
  const [attemptCounter, setAttemptCounter] = useState<number>(0);

  const flip = (image: gameImage): void => {
    const clonedImageArray = imagesArray.slice();
    clonedImageArray[image.id].flipped = true;

    if (prevImage) {
      if (prevImage.img === image.img) {
        clonedImageArray[prevImage.id].flipped = true;
        setPrevImage(null);
      } else {
        clonedImageArray[prevImage.id].flipped = false;
        setPrevImage(image);
      }
    } else {
      setPrevImage(image);
    }
    setImagesArray(clonedImageArray);
    setAttemptCounter(attemptCounter + 1);
    if (checkWin(clonedImageArray)) {
      setIsWın(true);
    }
  };

  const checkWin = (images: gameImage[]): boolean => {
    return images.every((img) => img.flipped);
  };

  const restart = (): void => {
    setImagesArray(createImageList(getRandomImg()));
    setIsWın(false);
    setPrevImage(null);
    setAttemptCounter(0);
  };

  return (
    <div>
      {isWin ? (
        <WinScreen restart={restart} attemptCounter={attemptCounter} />
      ) : (
        <CardsSection>
          <ImageCard imagesArray={imagesArray} flip={flip} />
        </CardsSection>
      )}
    </div>
  );
}

export default App;
