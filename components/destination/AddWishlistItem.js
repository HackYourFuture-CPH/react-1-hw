"use client";

import { useState } from 'react';
import styles from './destination.module.css';

export const AddWishlistItem = ({
  onAddWishlistItem,
}) => {
  const [customName, setCustomName] = useState(''); 
  const [thumbnail, onThumbnailChange] = useState('/destination/image-europa.png'); // To handle the thumbnail selection

  const onAddItemPressed = () => {
    if (customName.trim()) {
      onAddWishlistItem(customName, thumbnail);
      setCustomName(''); 
    } else {
      alert("Please enter a valid planet name!"); // Optional: Alert if input is empty
    }
  };

  return (
    <div className={styles.addWishlistItem}>
      <p>Add custom planet to wishlist</p>

      <label htmlFor="customWishlist">Wishlist item name</label>
      <input
        id="customWishlist"
        type="text"
        value={customName}
        onChange={(e) => setCustomName(e.target.value)}
      />

      <label htmlFor="customWishlistThumbnail">Wishlist item thumbnail</label>
      <select
        id="customWishlistThumbnail"
        value={thumbnail}
        onChange={(e) => onThumbnailChange(e.target.value)} 
      >
        <option value="/destination/image-europa.png">EUROPA</option>
        <option value="/destination/image-mars.png">MARS</option>
        <option value="/destination/image-moon.png">MOON</option>
        <option value="/destination/image-titan.png">TITAN</option>
      </select>

      <button onClick={onAddItemPressed}>ADD CUSTOM</button>
    </div>
  );
};
