import styles from "@/components/destination/destination.module.css";
import { useState } from "react";
function PlanetCard({
  onAddPlanet,
  onRemovePlanet,
  planetName,
  description,
  thumbnail,
}) {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div className={styles.planetCard}>
      <img className={styles.planetThumbnail} src={thumbnail} alt="" />
      <div className={styles.planetDescription}>
        <h2>
          {planetName} {isSelected ? "- SELECTED" : ""}
        </h2>
        <p>{description}</p>
      </div>
      <button
        className="roundButton"
        onClick={() => {
          !isSelected
            ? onAddPlanet(planetName, index, isSelected, setIsSelected)
            : onRemovePlanet(planetName, index, isSelected, setIsSelected);
        }}
      >
        {isSelected ? "REMOVE" : "ADD PLANET"}
      </button>
    </div>
  );
}

export default PlanetCard;
