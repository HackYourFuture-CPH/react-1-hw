"use client";

import { useState } from "react";

import styles from "@/components/destination/destination.module.css";
import { AddWishlistItem } from "@/components/destination/AddWishlistItem";
import { PlanetWishListItem } from "../../components/destination/PlanetWishlistItem";
import { PlanetCard } from "@/components/destination/PlanetCard";
import { planetsData } from "@/data/planetsData";

export const Destinations = () => {
    const [selectedPlanets, onAddPlanet] = useState([]);

    let isPlanetSelected = false;
    let numberOfPlanets = 0;

    const onAddOrRemovePlanet = (name, index) => {
        // TASK - React 1 week 2
        // Implement this function
        // If you press the "ADD PLANET" the selected planet should display "SELECTED"
        // And the counter should update, how many planets are selected (numberOfPlanets)
        console.log(`You seleceted the following planet: ${name}, with the index of ${index}`);
        const updatedPlanets = [...selectedPlanets];
        const planetIndex = updatedPlanets.indexOf(name);

        if (planetIndex > -1) {
            // Planet already selected, remove it
            updatedPlanets.splice(planetIndex, 1);
        } else {
            // Planet not selected, add it
            updatedPlanets.push(name);
        }

        onAddPlanet(updatedPlanets); // Update state with the new list
    };
    return (
        <div className="fullBGpicture">
            <main className="mainContent">
                <h1>Travel destinations</h1>
                <section className="card">
                    <h2>Wishlist</h2>
                    {/* TASK - React 1 week 2 */}
                    {/* Display the number Of selected planets */}
                    {/* Display the "no planets" message if it is empty! */}
                    <p>
                        {selectedPlanets.length === 0
                            ? "No planets in wishlist :("
                            : `You have ${selectedPlanets.length} in your wishlist`}
                    </p>
                    <b>List coming soon after lesson 3!</b>

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
                </section>
                <section className="card">
                    <h2>Possible destinations</h2>
                    {/* TASK - React 1 week 2 */}
                    {/* Add all 4 planets! Europa, Moon, Mars, Titan  */}
                    {/* Use the README.md file for descriptions */}
                    {/* Create a <PlanetCard /> component, which accepts the following properties: */}
                    {/* name, description, thumbnail, isSelected, onAddOrRemovePlanet */}
                    {planetsData.map((planet, index) => (
                        <PlanetCard
                            key={index}
                            name={planet.name}
                            description={planet.description}
                            thumbnail={planet.thumbnail}
                            isSelected={selectedPlanets.includes(planet.name)}
                            onAddOrRemovePlanet={() => onAddOrRemovePlanet(planet.name, index)}
                        />
                    ))}
                </section>
            </main>
        </div>
    );
};

export default Destinations;
