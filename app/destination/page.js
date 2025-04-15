
"use client";

import { useState } from "react";
import styles from "@/components/destination/destination.module.css";
import {AddWishlistItem} from "../../components/destination/AddWishlistItem";
import PlanetCard from "../../components/destination/PlanetCard";
import PlanetWishListItem from "../../components/destination/PlanetWishListItem";

const planetData = [
  {
    name: "Europa",
    description: "Europa, one of Jupiter’s moons...",
    thumbnail: "/destination/image-europa.png",
    isSelected: false,
  },
  {
    name: "Mars",
    description: "Mars, the Red Planet...",
    thumbnail: "/destination/image-mars.png",
    isSelected: false,
  },
  {
    name: "Moon",
    description: "The Moon, Earth's only natural satellite....",
    thumbnail: "/destination/image-moon.png",
    isSelected: false,
  },
  {
    name: "Titan",
    description: "Titan, Saturn’s largest moon..",
    thumbnail: "/destination/image-titan.png",
    isSelected: false,
  }
];


export const Destinations = () => {
  const [planets, setPlanets] = useState(planetData);
  const selectedPlanets = planets.filter(planet => planet.isSelected);
  

const onAddOrRemovePlanet = (name,index) => {
    setPlanets((prevPlanets) =>{
      return prevPlanets.map((planet) => {
      return planet.name === name
          ? { ...planet, isSelected: !planet.isSelected }
          : planet
        });
    });
    console.log(`You seleceted the following planet: ${name}, with the index of ${index}`);
  };


  const numberOfPlanets = selectedPlanets.length;

  const removeFromWishlist = (name) => {
    onAddOrRemovePlanet(name);
  };

  const handleAddWishlistItem = (newPlanet) => {
    setPlanets((prevPlanets) => [...prevPlanets, newPlanet]);
  };

  return (
    <div className="fullBGpicture">
      <main className="mainContent">

        <h1>Travel destinations</h1>
        <section className="card">
          <h2>Wishlist</h2>
          {numberOfPlanets === 0 ? (
            <p>No planets in wishlist :</p>
          ) : (
            <p>You have {numberOfPlanets} planets in your wishlist.</p>
          )}
          <b>List coming soon after lesson 3!</b>
          </section>

        <section className="card">
          <h2>Possible destinations</h2>
          {planets.map((planet) => (
            <PlanetCard
              key={planet.name}
              name={planet.name}
              description={planet.description}
              thumbnail={planet.thumbnail}
              isSelected={planet.isSelected}
              onAddOrRemovePlanet={() => onAddOrRemovePlanet(planet.name)}
            />
          ))}

          <AddWishlistItem onAddWishlistItem={handleAddWishlistItem}/>
          
          <h3>Your current wishlist</h3>
          <div className={styles.wishlistList}>
            {selectedPlanets.map((planet) => (
              <PlanetWishListItem
                key={planet.name}
                name={planet.name}
                thumbnail={planet.thumbnail}
                onRemove={() => removeFromWishlist(planet.name)}
              />
            ))}
          </div>

        </section>
      </main>
    </div>
  );
}

export default Destinations;
