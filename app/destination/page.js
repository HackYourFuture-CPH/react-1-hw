"use client";

import { useState } from "react";

import styles from "@/components/destination/destination.module.css";
import { AddWishlistItem } from "@/components/destination/AddWishlistItem"; 
import { PlanetCard } from "@/components/destination/PlanetCard";
import { PlanetWishlistItem } from "./PlanetWishlistItem";

const allPlanets = [
  {
    id: 1,
    name: "Europa",
    description:
      "Europa, one of Jupiter’s moons, is an icy world with a hidden ocean beneath its surface. This mysterious moon is a prime candidate for the search for extraterrestrial life, making it a thrilling destination for space explorers.",
    thumbnail: "image-europa.png",
  },
  {
    id: 2,
    name: "Mars",
    description:
      "Mars, the Red Planet, is a barren yet fascinating world with vast deserts, towering volcanoes, and the deepest canyon in the solar system. As humanity’s next frontier, Mars invites us to dream of colonization and the possibilities of life beyond Earth.",
    thumbnail: "image-mars.png",
  },
  {
    id: 3,
    name: "Moon",
    description:
      "Our closest celestial neighbor, the Moon, is a silent witness to Earth's history. With its stunning craters and desolate landscapes, the Moon offers a unique glimpse into space exploration's past and future, making it a perfect destination for lunar adventurers.",
    thumbnail: "image-moon.png",
  },
  {
    id: 4,
    name: "Titan",
    description:
      "Titan, Saturn's largest moon, is a world of dense atmosphere and liquid methane lakes. This enigmatic moon is shrouded in a thick orange haze, concealing a landscape that is both alien and strangely familiar, beckoning explorers to uncover its secrets.",
    thumbnail: "image-titan.png",
  },
];

export const Destinations = () => {
  const [selectedPlanets, onAddPlanet] = useState([]);

  let isPlanetSelected = false;
  let numberOfPlanets = selectedPlanets.length;

  const onAddOrRemovePlanet = (name, index) => {
    onAddPlanet((prevSelected) => {
      const isAlreadySelected = prevSelected.includes(name);
      console.log(
        `You selected the following planet: ${name}, with the index of ${index}`
      );
      if (isAlreadySelected) {
        return prevSelected.filter((planet) => planet !== name);
      } else {
        return [...prevSelected, name];
      }
    });
  };

  return (
    <div className="fullBGpicture">
      <main className={styles.main}>  
      <h1>Travel Destination</h1>
      <section className="card">
        <h2>wishlist</h2>
          {numberOfPlanets === 0 ? (
            <p>No planets in wishlist :( </p>
          ) : (
            <p>You have {numberOfPlanets} in your wishlist</p>
          )}
          <b>List coming soon after lesson 3!</b>
          </section>
          <section className="card">
            <h2>Possible Destinations</h2>
  
          {allPlanets.map((planet, index) => (
            <PlanetCard
              key={planet.id}
              name={planet.name}
              description={planet.description}
              thumbnail={planet.thumbnail}
              isPlanetSelected={selectedPlanets.includes(planet.name)}
              onAddOrRemovePlanet={onAddOrRemovePlanet}
              index={index}
            />  
          ))}
          </section>
            </main>
          </div>
       );
    };

export default Destinations;