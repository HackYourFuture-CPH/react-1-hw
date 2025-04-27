"use client";

import React, { useState } from 'react';
import styles from './destination.module.css';

export const AddWishlistItem = ({
  onAddWishlistItem,
}) => {
  const [thumbnail, onThumbnailChange] = useState('/destination/image-europa.png');
  const [planetName, setPlanetName] = useState(''); 

  const onAddItemPressed = () => {
    if (!planetName.trim()) return; // Avoid adding empty planet names

    onAddWishlistItem({ name: planetName, thumbnail }); // Call parent function
    setPlanetName(''); // Clear input
    setThumbnail('/destination/image-europa.png'); // Optionally reset select
  };

  return (
    <div className={styles.addWishlistItem}>
      <p>Add custom planet to wishlist</p>
      <label htmlFor="customWishlist">Wishlist item name</label>
      <input id="customWishlist" type="text" />
      <label htmlFor="customWishlistThumbnail">Wishlist item thumbnail</label>
      <select id="customWishlistThumbnail" >
        <option value="/destination/image-europa.png">EUROPA</option>
        <option value="/destination/image-mars.png">MARS</option>
        <option value="/destination/image-moon.png">MOON</option>
        <option value="/destination/image-titan.png">TITAN</option>
      </select>
      <button onClick={onAddItemPressed}>ADD CUSTOM</button>
    </div>
  );
};
