import styles from "./page.module.css"

const OurValues = () => {

    return (
      <div className={styles.Container}>
        <p>Our Values</p>
        <h1>Rules to live by</h1>
  
      <div class={styles.valuesContainer}>
        <div className={styles.valueBox}>
            <h2>01</h2>
            <h3>Love your craft</h3>
            <p>Exploration: We are driven by a deep-seated desire to explore the unknown. We believe that the pursuit of discovery is at the heart of human nature, and we are committed to pushing the boundaries of what is possible.</p>
        </div>
        <div className={styles.valueBox}>
            <h2>02</h2>
            <h3>Be bold. Be humble.</h3>
            <p>Innovation: At Galactica, we prioritize cutting-edge technology and innovation. We are constantly evolving our spacecraft, safety protocols, and services to ensure that our travelers experience the most advanced and secure space journeys available.</p>
        </div>
        <div className={styles.valueBox}>
            <h2>03</h2>
            <h3>Be better. Always push forward.</h3>
            <p>Sustainability: We are committed to making space exploration sustainable for future generations. Our space missions are designed to minimize environmental impact, both on Earth and in space, and to foster a spirit of responsibility towards our universe.</p>
        </div>
        <div className={styles.valueBox}>
            <h2>04</h2>
            <h3>Be a Professional</h3>
            <p>Community: We believe in the power of collective exploration. Our journeys are not just about reaching new destinations; they are about building a community of space enthusiasts who share a passion for the stars.</p>
        </div>
      </div>
      </div>
  
    );
  };

  export default OurValues;