"use client";

import { useState } from 'react';
import styles from './destination.module.css';

const AddWishlistItem = ({ onAddWishlistItem }) => {

  const [wishlistItemName, setWishlistItemName] = useState('');

  const [thumbnail, setThumbnail] = useState('/destination/image-europa.png');

  // TASK - React 1 week 3
  // 1. Add a useState for the handling the <input id="customWishlist" type="text" />
  // 2. Connect the onThumbnailChange to the <select>

  const onWishlistItemNameChange = (event) => {
    setWishlistItemName(event.target.value);
  };

  const onThumbnailChange = (event) => {
    setThumbnail(event.target.value);
  };

  const onAddItemPressed = () => {

    if (wishlistItemName.trim() !== '') {
      onAddWishlistItem({
        name: wishlistItemName,   
        thumbnail: thumbnail
      });

      setWishlistItemName('');
      setThumbnail('/destination/image-europa.png');
    }    // TASK - React 1 week 3
    // implement this function
    // Clear the <input/> field on button press
    // pass the thumbnail and the name from the input to the onAddWishlistItem function
    // call the onAddWishlistItem here
  };


  return (
    <div className={styles.addWishlistItem}>
      <p>Add custom planet to wishlist</p>

      <label htmlFor="customWishlist">Wishlist item name</label>
      <input 
      id="customWishlist"
      type='text'
      value={wishlistItemName} //Connect input to state
      onChange={onWishlistItemNameChange}
      />

      <label htmlFor="customWishlistThumbnail">Wishlist item thumbnail</label>

      <select 
      id="customWishlistThumbnail" 
      value={thumbnail}
      onChange={onThumbnailChange} //Connect select to state
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

export default AddWishlistItem;
