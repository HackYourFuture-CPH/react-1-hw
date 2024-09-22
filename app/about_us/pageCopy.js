import styles from './page.module.css';
import  OurValues from './OurValues/OurValues.js'
import OurCrew from './OurCrew/OurCrew.js';
import OurPartners from './OurPartners/OurPartners.js';

// TASK - React 1 week 1
// After you are finished with creating the page, move the OurValues, OurCrew, OurPartners components into their own files
// OurValues.js, OurCrew.js, OurPartners.js should live in this folder
// import and use the components from the newly created files

// const OurValues = () => {
  // TASK - React 1 week 1
  // Create the "Our Values" section
  // Use the descriptions provided in /app/about_us/README.md
  // Some inspiration ideas found in /data/inspiration_about_us
//   return (
//     <div className={styles.gridContainer}>

//     <div className={styles.gridItem}>
//     <div className={styles.title}>Exploration</div>    
//     We are driven by a deep-seated desire to explore the unknown. We believe that the pursuit of discovery is at the heart of human nature, and we are committed to pushing the boundaries of what is possible.
//     </div>
    

//     <div className={styles.gridItem}>
//     <div className={styles.title}>Innovation</div>
//      At Galactica, we prioritize cutting-edge technology and innovation. We are constantly evolving our spacecraft, safety protocols, and services to ensure that our travelers experience the most advanced and secure space journeys available.
//     </div>
    

//     <div className={styles.gridItem}>
//     <div className={styles.title}>Sustainability</div>
//      We are committed to making space exploration sustainable for future generations. Our space missions are designed to minimize environmental impact, both on Earth and in space, and to foster a spirit of responsibility towards our universe.
//     </div>
   

//     <div className={styles.gridItem}>
//     <div className={styles.title}>Community</div>
//      We believe in the power of collective exploration. Our journeys are not just about reaching new destinations; they are about building a community of space enthusiasts who share a passion for the stars. 
//     </div>
//     </div>
//   );
// };


//const OurCrew = () => {
  // TASK - React 1 week 1
  // Create the "Our Crew section"
  // Use the descriptions provided in /app/about_us/README.md
  // Use the pictures from /public/crew
  // Some inspiration ideas found in /data/inspiration_about_us
//   return (
// <div className={styles.app}>

//     <div className={styles.introduction}>
//     <div className={styles.description}>
//     <img 
//     src="/crew/crew.webp"
//     alt="Crew"
//     className={styles.crew}/>
//     </div>
//      <div>Our crew is the heart and soul of Galactica. We are a diverse team of seasoned space explorers, engineers, and visionaries who are united by a common goal: 
//     <br/><p className={styles.crewName}><b>to make space travel accessible and exciting for all.</b></p></div>
//      </div>

//      <div className={styles.border}></div>

//     <div className={`${styles.container} ${styles.left}`}>
//     <div className={styles.description}>
//     <img 
//     src="/crew/Captain Sarah Vega.webp"
//     alt="Captain Sarah Vega"
//     className={styles.crewImage}/>
//     </div>
//     <div className={styles.text}>
//     <p className={styles.crewName}><b>Captain Sarah Vega</b></p> 
//     <br />
//     A former NASA astronaut with over 15 years of experience, Captain Vega leads our missions with unparalleled expertise and a passion for space exploration.
//     </div>
//     </div>
//     <br /><br />

//     <div className={`${styles.container} ${styles.right}`}>
//     <div className={styles.description}>
//     <img 
//     src="/crew/Dr. Leo Redding.webp"
//     alt="Dr. Leo Redding"
//     className={styles.crewImage}/>
//     </div>
//     <div className={styles.text}>
//     <p className={styles.crewName}><b>Dr. Leo Redding</b></p>
//     <br />
//     Our chief astrophysicist, Dr. Redding, is a renowned scientist who has contributed to major space discoveries. He ensures that every journey is as educational as it is exhilarating.
//     </div>
//     </div>
//     <br /><br />

//     <div className={`${styles.container} ${styles.left}`}>
//     <div className={styles.description}>
//     <img 
//     src="/crew/Chief Engineer Hana Lee.jpg"
//     alt="Chief Engineer Hana Lee"
//     className={styles.crewImage}/>
//     </div>
//     <div className={styles.text}>
//     <p className={styles.crewName}><b>Chief Engineer Hana Lee</b></p>
//     <br />
//     With her extensive background in aerospace engineering, Hana Lee is responsible for the state-of-the-art technology that powers our spacecraft. Her innovation ensures that our travelers are always in safe hands.
//     </div>
//     </div>
//     <br /><br />

//     <div className={`${styles.container} ${styles.right}`}>
//     <div className={styles.description}><img 
//     src="/crew/Mission-Specialist-Alex-Santos.webp"
//     alt="Mission Specialist Alex Santos"
//     className={styles.crewImage}/>
//     </div>
//     <div className={styles.text}>
//     <p className={styles.crewName}><b>Mission Specialist Alex Santos</b></p> 
//     <br />
//     As a mission specialist, Alex’s job is to ensure that every aspect of the journey runs smoothly. With a background in both science and adventure tourism, Alex is the perfect guide for our space travelers.
//     </div>
//     </div>
//     <br /><br />

//     <div className={`${styles.container} ${styles.left}`}>
//     <div className={styles.description}><img 
//     src="/crew/Crew Member Maya Patel.webp"
//     alt="Crew Member Maya Patel"
//     className={styles.crewImage}/>
//     </div>
//     <div className={styles.text}>
//     <p className={styles.crewName}><b>Crew Member Maya Patel</b></p>
//     <br />
//      Maya brings a unique blend of technical skills and customer service experience to the team. She’s always ready to assist with any needs and to make sure every traveler has an unforgettable experience.
//      </div>
//     </div>
//     </div>
//   );
// }

// const OurPartners = () => {
//   // TASK - React 1 week 1
//   // Create the "Our Crew section"
//   // Use the descriptions provided in /app/about_us/README.md
//   // Use the pictures from /public/crew
//   // Some inspiration ideas found in /data/inspiration_about_us
//   return (
//     <div className= {`${styles.app} ${styles.partners}`}> 
//     We collaborate with some of the most respected names in the space and technology industries to make every journey extraordinary. 
    
//     <div className={styles.partnersContainer}>
//     <div className={styles.partnersLogo}>
//     <img 
//     src="/business_partners/alphabet-logo.png"
//     alt="Alphabet Logo"
//     className={styles.logoImage}/>
//     </div>

//     <div className={styles.partnersLogo}>
//     <img 
//     src="/business_partners/amazon_logo.png"
//     alt="amazon logo"
//     className={styles.logoImage}/>
//     </div>

//     <div className={styles.partnersLogo}>
//     <img 
//     src="/business_partners/CBC_Logo_White.png"
//     alt="CBC Logo"
//     className={styles.logoImage}/>
//     </div>


//     <div className={styles.partnersLogo}>
//     <img 
//     src="/business_partners/Microsoft-Logo-white.png"
//     alt="Microsoft Logo"
//     className={styles.logoImage}/>
//     </div>

//     <div className={styles.partnersLogo}>
//     <img 
//     src="/business_partners/nyu-logo.png"
//     alt="nyu Logo"
//     className={styles.logoImage}/>
//     </div>

//     <div className={styles.partnersLogo}>
//     <img 
//     src="/business_partners/QueensLogo_white.png"
//     alt="Queens Logo"
//     className={styles.logoImage}/>
//     </div>

//     <div className={styles.partnersLogo}>
//     <img 
//     src="/business_partners/samsung-logo.png"
//     alt="Samsung Logo"
//     className={styles.logoImage}/>
//     </div>

//     <div className={styles.partnersLogo}>
//     <img 
//     src="/business_partners/sodexo-logo.png"
//     alt="Sodexo Logo"
//     className={styles.logoImage}/>
//     </div>   

//     </div>
//     </div>


//   );
// }


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
