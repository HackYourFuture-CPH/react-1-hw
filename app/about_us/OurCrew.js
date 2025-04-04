import styles from "./page.module.css"

const OurCrew = () => {
    return (
      <div className={styles.container}>
        <p>Our Team</p>
        <h1>Who we are</h1>
        <p>
        Our crew is the heart and soul of Galactica. We are a diverse team of seasoned space explorers, engineers, and visionaries who are united by a common goal: to make space travel accessible and exciting for all.
        </p>
  
        <div className={styles.crewContainer}>
          <div className={styles.crewBox}>
            <img src={"/crew/image-anousheh-ansari.png"}></img>
            <h5>Anousheh Ansari</h5>
            <h6>Founder + CEO</h6>
          </div>
  
          <div className={styles.crewBox}>
            <img src={"/crew/image-mark-shuttleworth.png"}></img>
            <h5>Mark Shuttleworth</h5>
            <h6>Founder + CEO</h6>
          </div>
  
          <div className={styles.crewBox}>
            <img src={"/crew/image-douglas-hurley.png"}></img>
            <h5>Douglas Hurley</h5>
            <h6>Founder + CEO</h6>
          </div>
  
          <div className={styles.crewBox}>
            <img src={"/crew/image-victor-glover.png"}></img>
            <h5>Victor Glover</h5>
            <h6>Founder + CEO</h6>
          </div>
  
        </div>
      </div>
      
      
      
    );
  }


  export default OurCrew;