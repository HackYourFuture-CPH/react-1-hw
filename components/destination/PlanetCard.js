"use client";

import styles from '@/components/destination/destination.module.css';

const PlanetCard = ({ name, description, thumbnail, isSelected, onAddOrRemovePlanet }) => {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "12px",
      padding: "16px",
      marginBottom: "10px", 
     
    }}>
      <img className={styles.planetThumbnail} src={thumbnail}  alt={`Image of ${name}`} />
      <div className={styles.planetDescription}>
        <h2>{name.toUpperCase()} {isSelected ? "- SELECTED" : ""}</h2>
        <p>{description}</p>
      </div>
      <button className="roundButton" onClick={onAddOrRemovePlanet}>
        {isSelected ? "REMOVE" : "ADD PLANET"}
      </button>
    </div>
  );
};

export default PlanetCard;