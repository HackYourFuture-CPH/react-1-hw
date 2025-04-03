"use client";

import { useState } from 'react';
import styles from './destination.module.css';

 const AddWishlistItem = ({ onAddWishlistItem}) => {
  const [thumbnail, setThumbnail] = useState('/destination/image-europa.png');
  const [itemName, setItemName] = useState('');

  const onThumbnailChange = (event) => {
    setThumbnail(event.target.value); 
  };

  const onItemNameChange = (event) => {
    setItemName(event.target.value); 
  };

  // TASK - React 1 week 3
  // 1. Add a useState for the handling the <input id="customWishlist" type="text" />
  // 2. Connect the onThumbnailChange to the <select>

  const onAddItemPressed = () => {

    if (itemName.trim() === '') {
      alert("Please enter a planet name!"); 
      return;


    // TASK - React 1 week 3
    // implement this function
    // Clear the <input/> field on button press
    // pass the thumbnail and the name from the input to the onAddWishlistItem function
    // call the onAddWishlistItem here
  }
  onAddWishlistItem({
    name: itemName,
    thumbnail: thumbnail,
  });

  setItemName('');
  setThumbnail('/destination/image-europa.png'); 
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
      <button>ADD CUSTOM</button>
    </div>
  );
};
 export default AddWishlistItem