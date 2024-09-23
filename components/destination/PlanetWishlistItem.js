import React from 'react';
import styles from './wishlist.module.css';

const PlanetWishlistItem = ({ name, thumbnail, onRemove }) => {
  return (
    <div className={styles.wishlistItem}>
      <img src={thumbnail} alt={name} className={styles.wishlistImage} />
      <div className={styles.wishlistInfo}>
        <p>{name}</p>
      </div>
      <button onClick={onRemove} className={styles.wishlistButton}>
        Remove
      </button>
    </div>
  );
};

export default PlanetWishlistItem;

