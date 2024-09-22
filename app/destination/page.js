"use client";

import { useState } from 'react';
import styles from '@/components/destination/destination.module.css';
import PlanetCard from './PlanetCard/PlanetCard.js';
import PlanetWishlistItem from './PlanetWishlistItem/PlanetWishlistItem.js';
import AddWishlistItem from '@/components/destination/AddWishlistItem.js';

// Example data for planets
const planetsData = [
  { name: 'Europa', description: 'Europa, one of Jupiter’s moons, is an icy world with a hidden ocean beneath its surface. This mysterious moon is a prime candidate for the search for extraterrestrial life, making it a thrilling destination for space explorers.', thumbnail: '/destination/image-europa.png' },
  { name: 'Moon', description: "Our closest celestial neighbor, the Moon, is a silent witness to Earth's history. With its stunning craters and desolate landscapes, the Moon offers a unique glimpse into space exploration's past and future, making it a perfect destination for lunar adventurers.", thumbnail: '/destination/image-moon.png' },
  { name: 'Mars', description: 'Mars, the Red Planet, is a barren yet fascinating world with vast deserts, towering volcanoes, and the deepest canyon in the solar system. As humanity’s next frontier, Mars invites us to dream of colonization and the possibilities of life beyond Earth.', thumbnail: '/destination/image-mars.png' },
  { name: 'Titan', description: "Titan, Saturn's largest moon, is a world of dense atmosphere and liquid methane lakes. This enigmatic moon is shrouded in a thick orange haze, concealing a landscape that is both alien and strangely familiar, beckoning explorers to uncover its secrets.", thumbnail: '/destination/image-titan.png' }
];

export const Destinations = () => {
  const [selectedPlanets, setSelectedPlanets] = useState([]);

  // Function to check if a planet is selected
  const isPlanetSelected = (name) => selectedPlanets.some(planet => planet.name === name);

  // Function to handle adding or removing planets
  const onAddOrRemovePlanet = (name, index) => {
    const isPlanetAlreadySelected = isPlanetSelected(name);

    if (isPlanetAlreadySelected) {
      const updatedPlanets = selectedPlanets.filter(planet => planet.name !== name);
      setSelectedPlanets(updatedPlanets);
    } else {
      const planet = planetsData.find(planet => planet.name === name);
      if (planet) {
        const updatedPlanets = [...selectedPlanets, planet];
        setSelectedPlanets(updatedPlanets);
      }
    }

    console.log(`You selected the following planet: ${name}, with the index of ${index}`);
  };

  const numberOfPlanets = selectedPlanets.length;
  const isPlanetSelectedAny = numberOfPlanets > 0;

    //Function to handle adding custom wishlist items

    const onAddWishlistItem = (newItem) => {
      setSelectedPlanets((prevSelectedPlanets) => [...prevSelectedPlanets, newItem]);
    };
 
  const onRemoveWishlistItem = (name) => {
    setSelectedPlanets((prevSelectedPlanets) =>
      prevSelectedPlanets.filter(planet => planet.name !== name)
    );
  };

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Travel Destinations</h1>

        <section className="card">
          <h2>Wishlist</h2>
          {numberOfPlanets === 0 ? (
            <p>No planets in wishlist :O</p>
          ) : (
            <p>You have {numberOfPlanets} in your wishlist</p>
          )}
          <ul>
            {selectedPlanets.map((planet,index) => (
              <PlanetWishlistItem 
              key={index}
              name={planet.name}
              thumbnail={planet.thumbnail}
              //onRemove={() => onRemoveWishlistItem(planet.name)}     
              onRemove={() => setSelectedPlanets(selectedPlanets.filter(p => p.name !== planet.name))}
              />
            ))}
          </ul>

          {/* uncomment the following code snippet: */}
           
          {/* <h3>Your current wishlist</h3>
          <div className={styles.wishlistList}>
            <PlanetWishlistItem 
              name="europa"
              onRemove={() => onRemoveWishlistItem('europa')}
              thumbnail="/destination/image-europa.png"
            />
            <PlanetWishlistItem 
              name="europa"
              onRemove={() => onRemoveWishlistItem('europa')}
              thumbnail="/destination/image-europa.png"
            />
          </div>  */}

       </section>
          
          {/* <b>List coming soon after lesson 3!</b> */}
      

        <section className='card'>
          <h2>Add a Custom Planet to Wishlist</h2>
          <AddWishlistItem onAddWishlistItem={onAddWishlistItem} />
        </section>

        <section className="card">
          <h2>Possible Destinations</h2>
          {planetsData.map((planet) => (
            <PlanetCard
              key={planet.name}
              name={planet.name}
              description={planet.description}
              thumbnail={planet.thumbnail}
              isSelected={isPlanetSelected(planet.name)}
              onAddOrRemovePlanet={() => onAddOrRemovePlanet(planet.name)}
              // isSelected={selectedPlanets.some(selected => selected.name === planet.name)}
              // onAddOrRemovePlanet={() => {}}
              //isSelected={isPlanetSelected(planet.name)}
              //onAddOrRemovePlanet={onAddOrRemovePlanet}
            />
           
          ))}
        </section>
      </main>
    </div>
  );
};

export default Destinations;




          
          {/* STOP! - this is for week 3!*/}
          {/* TASK - React 1 week 3 */}
          {/* Import the AddWishlistItem react component */}
          {/* <AddWishlistItem /> */}

          {/* TASK - React 1 week 3 */}
          {/* Convert the list, so it is using selectedPlanets.map() to display the items  */}
          {/* Implement the "REMOVE" function */}
          {/* uncomment the following code snippet: */}
           
      //     <h3>Your current wishlist</h3>
      //     <div className={styles.wishlistList}>
      //       <PlanetWishlistItem 
      //         name="europa"
      //         onRemove={() => removeFromWishlist('europa')}
      //         thumbnail="/destination/image-europa.png"
      //       />
      //       <PlanetWishlistItem 
      //         name="europa"
      //         onRemove={() => removeFromWishlist('europa')}
      //         thumbnail="/destination/image-europa.png"
      //       />
      //     </div> 

      //  </section>

       

