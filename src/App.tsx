import { useEffect, useState } from "react";
import "./styles.scss";
import { ImageCard } from "./components/imageCard/ImageCard";
import { CardsSection } from "./components/cardsSection/CardsSection";

function App() {
  return (
    <div>
      <CardsSection>
        <ImageCard />
      </CardsSection>
    </div>
  );
}

export default App;
