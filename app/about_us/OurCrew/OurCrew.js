import styles from '../OurCrew/OurCrew.module.css';

const OurCrew = () => {
    // TASK - React 1 week 1
    // Create the "Our Crew section"
    // Use the descriptions provided in /app/about_us/README.md
    // Use the pictures from /public/crew
    // Some inspiration ideas found in /data/inspiration_about_us
    return (
  <div className={styles.app}>
  
      <div>
      <div className={styles.description}>
      <img 
      src="/crew/crew.webp"
      alt="Crew"
      className={styles.crew}/>
      </div>
       <div>Our crew is the heart and soul of Galactica. We are a diverse team of seasoned space explorers, engineers, and visionaries who are united by a common goal: 
      <br/><p className={styles.crewName}><b>to make space travel accessible and exciting for all.</b></p></div>
       </div>
  
       <div className={styles.border}></div>
  
      <div className={`${styles.container} ${styles.left}`}>
      <div className={styles.description}>
      <img 
      src="/crew/Captain Sarah Vega.webp"
      alt="Captain Sarah Vega"
      className={styles.crewImage}/>
      </div>
      <div className={styles.text}>
      <p className={styles.crewName}><b>Captain Sarah Vega</b></p> 
      <br />
      A former NASA astronaut with over 15 years of experience, Captain Vega leads our missions with unparalleled expertise and a passion for space exploration.
      </div>
      </div>
      <br /><br />
  
      <div className={`${styles.container} ${styles.right}`}>
      <div className={styles.description}>
      <img 
      src="/crew/Dr. Leo Redding.webp"
      alt="Dr. Leo Redding"
      className={styles.crewImage}/>
      </div>
      <div className={styles.text}>
      <p className={styles.crewName}><b>Dr. Leo Redding</b></p>
      <br />
      Our chief astrophysicist, Dr. Redding, is a renowned scientist who has contributed to major space discoveries. He ensures that every journey is as educational as it is exhilarating.
      </div>
      </div>
      <br /><br />
  
      <div className={`${styles.container} ${styles.left}`}>
      <div className={styles.description}>
      <img 
      src="/crew/Chief Engineer Hana Lee.jpg"
      alt="Chief Engineer Hana Lee"
      className={styles.crewImage}/>
      </div>
      <div className={styles.text}>
      <p className={styles.crewName}><b>Chief Engineer Hana Lee</b></p>
      <br />
      With her extensive background in aerospace engineering, Hana Lee is responsible for the state-of-the-art technology that powers our spacecraft. Her innovation ensures that our travelers are always in safe hands.
      </div>
      </div>
      <br /><br />
  
      <div className={`${styles.container} ${styles.right}`}>
      <div className={styles.description}><img 
      src="/crew/Mission-Specialist-Alex-Santos.webp"
      alt="Mission Specialist Alex Santos"
      className={styles.crewImage}/>
      </div>
      <div className={styles.text}>
      <p className={styles.crewName}><b>Mission Specialist Alex Santos</b></p> 
      <br />
      As a mission specialist, Alex’s job is to ensure that every aspect of the journey runs smoothly. With a background in both science and adventure tourism, Alex is the perfect guide for our space travelers.
      </div>
      </div>
      <br /><br />
  
      <div className={`${styles.container} ${styles.left}`}>
      <div className={styles.description}><img 
      src="/crew/Crew Member Maya Patel.webp"
      alt="Crew Member Maya Patel"
      className={styles.crewImage}/>
      </div>
      <div className={styles.text}>
      <p className={styles.crewName}><b>Crew Member Maya Patel</b></p>
      <br />
       Maya brings a unique blend of technical skills and customer service experience to the team. She’s always ready to assist with any needs and to make sure every traveler has an unforgettable experience.
       </div>
      </div>
      </div>
    );
  }

  export default OurCrew;