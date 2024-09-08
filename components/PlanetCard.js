import React from "react";

import styles from './destination/destination.module.css';

const PlanetCard = ({ name, description, thumbnail, isSelected, onAddOrRemoverPlanet }) => {
    return (
        <div className={styles.planetCard}>
<img className={styles.planetThumbnail} src={thumbnail} alt={name} />
<div className={styles.planetDescription}>
<h2>{name} {isSelected ? "- SELECTED" : ""}</h2>
<p>{description}</p>
<button className="roundButton" onClick={onAddOrRemoverPlanet}>
{isSelected ? "REMOVE" : "ADD PLANET"}
</button>
</div>
        </div>
    );
};

export default PlanetCard;