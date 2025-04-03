
const PlanetWishlistItem = ({
   name, 
   onRemove, 
   onAdd, 
   thumbnail }) => {
  return (
    <div className={styles.wishlistItem}>
      <img className={styles.wishlistItemThumbnail} src={thumbnail} alt={name} />
      <b>{name.toUpperCase()}</b>
      <button onClick={onRemove}>Remove from wishlist</button>
      <button onClick={onAdd}>Add to wishlist</button>
    </div>
  );
};

export default PlanetWishlistItem;