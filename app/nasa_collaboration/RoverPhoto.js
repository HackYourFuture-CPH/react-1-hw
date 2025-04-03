import React from 'react';
import styles from "./page.module.css";


const RoverPhoto = ({ src, date, roverName }) => {
  return (
    <div className={styles.photoCard}>
      <img src={src} alt={`Photo taken by ${roverName}`} className={styles.photo} />
      <p><b>Rover:</b> {roverName}</p>
      <p><b>Date:</b> {date}</p>
    </div>
  );
};

export default RoverPhoto;