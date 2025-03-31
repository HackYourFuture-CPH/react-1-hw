"use client";

import { useState } from 'react';

import styles from '@/components/destination/destination.module.css';
import { AddWishlistItem } from '@/components/destination/AddWishlistItem';

const PlanetWishlistItem = ({
  name,
  onRemove,
  thumbnail,
}) => {
  return (
    <div className={styles.wishlistItem}>
      <img className={styles.wishlistItemThumbnail} src={thumbnail} alt="" />
      <b>{name.toUpperCase()}</b>
      <button onClick={onRemove}>remove</button>
    </div>
  );
}


export const Destinations = () => {
  const [selectedPlanets, setSelectedPlanets] = useState([]);

  const onAddOrRemovePlanet = (name) => {
    setSelectedPlanets((prevPlanets) =>
      prevPlanets.includes(name)
        ? prevPlanets.filter((planet) => planet !== name)
        : [...prevPlanets, name]
    );
  };

  const removeFromWishlist = (name) => {
    setSelectedPlanets((prevPlanets) => prevPlanets.filter((planet) => planet !== name));
  };

  const planets = [
    { name: "Europa", thumbnail: "/destination/image-europa.png", description: "Lorem ipsum..." },
    { name: "Moon", thumbnail: "/destination/image-moon.png", description: "Lorem ipsum..." },
    { name: "Mars", thumbnail: "/destination/image-mars.png", description: "Lorem ipsum..." },
    { name: "Titan", thumbnail: "/destination/image-titan.png", description: "Lorem ipsum..." }
  ];

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Travel destinations</h1>
        <section className="card">
          <h2>Wishlist</h2>
          {selectedPlanets.length === 0 ? (
            <p>No planets in wishlist :(</p>
          ) : (
            <>
              <p>You have {selectedPlanets.length} planets in your wishlist:</p>
              <div className={styles.wishlistList}>
                {selectedPlanets.map((planet) => (
                  <PlanetWishlistItem
                    key={planet}
                    name={planet}
                    onRemove={() => removeFromWishlist(planet)}
                    thumbnail={`/destination/image-${planet.toLowerCase()}.png`}
                  />
                ))}
              </div>
            </>
          )}
        </section>
          
          {/* STOP! - this is for week 3!*/}
          {/* TASK - React 1 week 3 */}
          {/* Import the AddWishlistItem react component */}
          {/* <AddWishlistItem /> */}
          {/* TASK - React 1 week 3 */}
          {/* Convert the list, so it is using selectedPlanets.map() to display the items  */}
          {/* Implement the "REMOVE" function */}
          {/* uncomment the following code snippet: */}
          {/* 
          <h3>Your current wishlist</h3>
          <div className={styles.wishlistList}>
            <PlanetWishlistItem 
              name="europa"
              onRemove={() => removeFromWishlist('europa')}
              thumbnail="/destination/image-europa.png"
            />
            <PlanetWishlistItem 
              name="europa"
              onRemove={() => removeFromWishlist('europa')}
              thumbnail="/destination/image-europa.png"
            />
          </div> */}
     
     <section className="card">
          <h2>Possible Destinations</h2>
          <div className={styles.planetContainer}>
            {planets.map((planet) => {
              const isSelected = selectedPlanets.includes(planet.name);
              return (
                <div key={planet.name} className={styles.planetCard}>
                  <img className={styles.planetThumbnail} src={planet.thumbnail} alt={planet.name} />
                  <div className={styles.planetDescription}>
                    <h2>
                      {planet.name} {isSelected ? "- SELECTED" : ""}
                    </h2>
                    <p>{planet.description}</p>
                  </div>
                  <button
                    className="roundButton"
                    onClick={() => onAddOrRemovePlanet(planet.name)}
                  >
                    {isSelected ? "REMOVE" : "ADD PLANET"}
                  </button>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Destinations;
