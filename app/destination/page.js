"use client";

import { useState } from 'react';
import styles from '@/components/destination/destination.module.css';
import { AddWishlistItem } from '@/components/destination/AddWishlistItem';
import PlanetWishlistItem from "./components/PlanetWishlistItem";



const planetsList = [
  { name: "Europa", description: "Icy moon with a subsurface ocean.", thumbnail: "/destination/image-europa.png" },
  { name: "Moon", description: "Earth's only natural satellite.", thumbnail: "/destination/image-moon.png" },
  { name: "Mars", description: "The Red Planet, potential for life.", thumbnail: "/destination/image-mars.png" },
  { name: "Titan", description: "Saturn’s largest moon with thick atmosphere.", thumbnail: "/destination/image-titan.png" }
];
{/*create planet card */}
const PlanetCard = ({ name, description, thumbnail, isSelected, onAddOrRemovePlanet }) => (
  <div className={styles.planetCard}>
    <img className={styles.planetThumbnail} src={thumbnail} alt={name} />
    <div className={styles.planetDescription}>
      <h2>{name} {isSelected ? "- SELECTED" : ""}</h2>
      <p>{description}</p>
    </div>
    <button className="roundButton" onClick={() => onAddOrRemovePlanet(name)}>
      {isSelected ? "REMOVE" : "ADD PLANET"}
    </button>
  </div>
);

{/* update destinations*/ }
export const Destinations = () => {
  const [selectedPlanets, setSelectedPlanets] = useState([]);
  const totalPlanets = planetsList.length;

  const onAddOrRemovePlanet = (name) => {
    setSelectedPlanets((prev) =>
      prev.includes(name) ? prev.filter((planet) => planet !== name) : [...prev, name]
    );
    console.log(`You selected or removed: ${name}`);
  };

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Travel Destinations</h1>
        <section className="card">
          <h2>Wishlist</h2>
          <p>{selectedPlanets.length === 0 ? "No planets in wishlist :(" : `You have ${selectedPlanets.length} planet(s) in your wishlist`}</p>

          <b>List coming soon after lesson 3!</b>
          
          {/* STOP! - this is for week 3!*/}
          {/* TASK - React 1 week 3 */}
          {/* Import the AddWishlistItem react component */}
          {/* <AddWishlistItem /> */}
          {/* TASK - React 1 week 3 */}
          {/* Convert the list, so it is using selectedPlanets.map() to display the items  */}
          {/* Implement the "REMOVE" function */}
          <h3>Your current wishlist</h3>
          <div className={styles.wishlistList}>
            {selectedPlanets.map((planet) => (
              <PlanetWishlistItem
                key={planet}
                name={planet}
                onRemove={() => onAddOrRemovePlanet(planet)}
                thumbnail={planetsList.find((p) => p.name === planet)?.thumbnail || ""}
              />
            ))}
          </div>
        </section>

        <section className="card">
          <h2>Possible Destinations</h2>
          <div className={styles.planetsGrid}>
            {planetsList.map((planet) => (
              <PlanetCard
                key={planet.name}
                name={planet.name}
                description={planet.description}
                thumbnail={planet.thumbnail}
                isSelected={selectedPlanets.includes(planet.name)}
                onAddOrRemovePlanet={onAddOrRemovePlanet}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Destinations;