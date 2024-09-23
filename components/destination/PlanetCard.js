import React from 'react';
import styles from './planetcard.module.css';

const PlanetCard = ({ name, description, imageUrl }) => {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={`${name} image`} className={styles.cardImage} />
      <h2 className={styles.cardTitle}>{name}</h2>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
};

export default PlanetCard;
