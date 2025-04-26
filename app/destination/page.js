"use client";

import { useState } from 'react';
import styles from '@/components/destination/destination.module.css';
import { AddWishlistItem } from '@/components/destination/AddWishlistItem'; // Assuming this exists

// Planet Wishlist Item Component
const PlanetWishlistItem = ({ name, onRemove, thumbnail }) => (
  <div className={styles.wishlistItem}>
    <img className={styles.wishlistItemThumbnail} src={thumbnail} alt={`Thumbnail of ${name}`} />
    <b>{name.toUpperCase()}</b>
    <button onClick={onRemove}>remove</button>
  </div>
);

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

        {/* Wishlist Section */}
        <section className="card">
          <h2>Wishlist</h2>
          {selectedPlanets.length === 0 ? (
            <p>No planets in wishlist :(</p>
          ) : (
            <>
              <p>You have {selectedPlanets.length} planet(s) in your wishlist:</p>
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

        {/* Optional AddWishlistItem Component */}
        <AddWishlistItem onAddPlanet={onAddOrRemovePlanet} /> {/* If you want to use this component */}

        {/* Possible Destinations Section */}
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
