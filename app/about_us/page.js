
import styles from './page.module.css';
import PlanetWishlistItem from '../../components/destination/PlanetWishlistItem';
import PlanetCard from '../../components/destination/PlanetCard';


// TASK - React 1 week 1
// After you are finished with creating the page, move the OurValues, OurCrew, OurPartners components into their own files
// OurValues.js, OurCrew.js, OurPartners.js should live in this folder
// import and use the components from the newly created files

const OurValues = () => {
  // TASK - React 1 week 1
  // Create the "Our Values" section
  // Use the descriptions provided in /app/about_us/README.md
  // Some inspiration ideas found in /data/inspiration_about_us
  return (
    <div>
    <p> We are driven by a deep-seated desire to explore the unknown. We believe that the pursuit of discovery is at the heart of human nature, and we are committed to pushing the boundaries of what is possible.

Innovation: At Galactica, we prioritize cutting-edge technology and innovation. We are constantly evolving our spacecraft, safety protocols, and services to ensure that our travelers experience the most advanced and secure space journeys available.

Sustainability: We are committed to making space exploration sustainable for future generations. Our space missions are designed to minimize environmental impact, both on Earth and in space, and to foster a spirit of responsibility towards our universe.

Community: We believe in the power of collective exploration. Our journeys are not just about reaching new destinations; they are about building a community of space enthusiasts who share a passion for the stars.</p>
    </div>
  );
};

const OurCrew = () => {
  // TASK - React 1 week 1
  // Create the "Our Crew section"
  // Use the descriptions provided in /app/about_us/README.md
  // Use the pictures from /public/crew
  // Some inspiration ideas found in /data/inspiration_about_us
  return (
   <section>
    <p>Our crew is the heart and soul of Galactica. We are a diverse team of seasoned space explorers, engineers, and visionaries who are united by a common goal: to make space travel accessible and exciting for all.</p>
    <div>
      <h3>Our Crew</h3>
    <p>Meet the best space travelers and scientist in the world:</p>
    <img src="/crew/image-anousheh-ansari.png" alt="Anousheh Ansari" />
    <h3>Anousheh Ansari</h3>
    <p>A former NASA astronaut with over 15 years of experience, Captain Vega leads our missions with unparalleled expertise and a passion for space exploration.</p>
    <img src="/crew/image-douglas-hurley.png" alt="Douglas Hurley" />
    <h3>Douglas Hurley</h3>
    <p>Our chief astrophysicist, Dr. Redding, is a renowned scientist who has contributed to major space discoveries. He ensures that every journey is as educational as it is exhilarating.
    </p>
    <img src="/crew/image-victor-glover.png" alt="Victor Glover" />
   <h3>Victor Glover</h3>
    <p>With her extensive background in aerospace engineering, Hana Lee is responsible for the state-of-the-art technology that powers our spacecraft. Her innovation ensures that our travelers are always in safe hands.</p>
    <img src="/crew/image-mark-shuttleworth.png" alt="Mark Shuttleworth" />
   <h3>Mark Shuttleworth</h3>
    <p>As a mission specialist, Alex’s job is to ensure that every aspect of the journey runs smoothly. With a background in both science and adventure tourism, Alex is the perfect guide for our space travelers.</p>
   </div>
   </section>
  );
}

const OurPartners = () => {
  // TASK - React 1 week 1
  // Create the "Our Crew section"
  // Use the descriptions provided in /app/about_us/README.md
  // Use the pictures from /public/crew
  // Some inspiration ideas found in /data/inspiration_about_us
  return (
    <div>
      <h2>Our Partners</h2>
      <p>Collaboration with the best space agencies and tech companies.</p>
    </div>
  );
}


export const Crew = () => {
  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>About us</h1>
        <section className="card">
          <h2>Our Values</h2>
          <OurValues/>
        </section>
        <section className="card">
          <h2>The crew</h2>
          <OurCrew/>
        </section>

         {/* TASK - React 1 week 1 */}
         {/* Add in the "OurPartners" component here */}
      </main>
    </div>
  );
}

export default Crew;
