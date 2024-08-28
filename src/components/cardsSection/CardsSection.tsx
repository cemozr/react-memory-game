import "../../styles.scss";
import { ReactNode } from "react";

type CardsSectionType = {
  children: ReactNode;
};

export const CardsSection = ({ children }: CardsSectionType) => {
  return <div className="cards-container">{children}</div>;
};
