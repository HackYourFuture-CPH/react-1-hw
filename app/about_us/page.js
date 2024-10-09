import styles from './page.module.css';
import OurValues from './OurValues';
import OurPartners from './OurPartners';

// TASK - React 1 week 1
// After you are finished with creating the page, move the OurValues, OurCrew, OurPartners components into their own files
// OurValues.js, OurCrew.js, OurPartners.js should live in this folder
// import and use the components from the newly created files

const OurCrew = () => {
  // TASK - React 1 week 1
  // Create the "Our Crew section"
  // Use the descriptions provided in /app/about_us/README.md
  // Use the pictures from /public/crew
  // Some inspiration ideas found in /data/inspiration_about_us
  return (
    <p> ADD OUR CREW HERE </p>
  );
}

export const Crew = () => {
  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>About us</h1>
        <section className="card">
          <h2>Our Values</h2>
          <OurValues />
        </section>
        <section className="card">
          <h2>The Crew</h2>
          <OurCrew />
        </section>

        {/* TASK - React 1 week 1 */}
        <section className="card">
          <h2>Our Partners</h2>
          <OurPartners />
        </section>
      </main>
    </div>
  );
}

export default Crew;
