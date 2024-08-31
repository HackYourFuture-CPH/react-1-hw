import styles from './page.module.css';

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
    <p>We believe in innovation, sustainability, and community.</p>
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
   <div>
    <p>Meet the best space travelers and scientist in the world.</p>
    <img src="/crew/image-anousheh-ansari.png" alt="Anousheh Ansari" />
    <p>Anousheh Ansari</p>
    <img src="/crew/image-douglas-hurley.png" alt="Douglas Hurley" />
    <p>Douglas Hurley</p>
    <img src="/crew/image-victor-glover.png" alt="Victor Glover" />
    <p>Victor Glover</p>
    <img src="/crew/image-mark-shuttleworth.png" alt="Mark Shuttleworth" />
    <p>Mark Shuttleworth</p>
   </div>
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
