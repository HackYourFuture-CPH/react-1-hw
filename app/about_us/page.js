import styles from './page.module.css';
import OurValues from './OurValues/OurValues.js'
import OurCrew from './OurCrew/OurCrew.js';
import OurPartners from './OurPartners/OurPartners.js';

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
         <section className="card">
         <h2>Our Partners</h2>
         <OurPartners/>
         </section>
      </main>
    </div>
  );
}

export default Crew;