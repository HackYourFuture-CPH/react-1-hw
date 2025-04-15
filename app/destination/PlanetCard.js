import React from 'react';
import styles from '@/components/destination/destination.module.css';



 export function PlanetCard () {
    const { name, description, thumbnail, isPlanetSelected, onAddOrRemovePlanet } = props;

    return (
        <div className={styles.planetCard}>
            <img className={styles.planetThumbnail} src={thumbnail} alt={name} />
            <div className={styles.planetDescription}>
                <h2>{name} {isPlanetSelected ? "- SELECTED" :""}</h2>
                <p>{description}</p>
                 </div>  
                <button
                    className={isPlanetSelected ? styles.removeButton : styles.addButton}
                    onClick={() => onAddOrRemovePlanet(name)}
                >
                    {isPlanetSelected ? 'REMOVE PLANET' : 'ADD PLANET'}
                </button>
            </div>


    );
}
