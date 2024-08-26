import styles from "./OurCrew.module.css";
const OurCrew = () => {
  return (
    <>
      <p className={styles["crew-p"]}>
        Our crew is the heart and soul of Galactica. We are a diverse team of seasoned space
        explorers, engineers, and visionaries who are united by a common goal: to make space travel
        accessible and exciting for all.
      </p>
      <div className={styles["crew-cards"]}>
        <div className={styles["crew-card"]}>
          <img src="/crew/img-2.png" alt="Sarah Vega" className={styles["crew-card-img"]} />
          <div className={styles["crew-card-content"]}>
            <h2 className={styles["crew-card-h2"]}>Sarah Vega</h2>
            <h3 className={styles["crew-card-h3"]}>Captain</h3>
            <p className={styles["crew-card-p"]}>
              A former NASA astronaut with over 15 years of experience, Captain Vega leads our
              missions with unparalleled expertise and a passion for space exploration.
            </p>
          </div>
        </div>
        <div className={styles["crew-card"]}>
          <img
            src="/crew/image-mark-shuttleworth.png"
            alt="Dr. Leo Redding"
            className={styles["crew-card-img"]}
          />
          <div className={styles["crew-card-content"]}>
            <h2 className={styles["crew-card-h2"]}>Dr. Leo Redding</h2>
            <h3 className={styles["crew-card-h3"]}>Chief Astrophysicist</h3>
            <p className={styles["crew-card-p"]}>
              Our chief astrophysicist, Dr. Redding, is a renowned scientist who has contributed to
              major space discoveries. He ensures that every journey is as educational as it is
              exhilarating.
            </p>
          </div>
        </div>
        <div className={styles["crew-card"]}>
          <img
            src="/crew/hana-lee.png"
            alt="Chief Engineer Hana Lee"
            className={styles["crew-card-img"]}
          />
          <div className={styles["crew-card-content"]}>
            <h2 className={styles["crew-card-h2"]}>Hana Lee</h2>
            <h3 className={styles["crew-card-h3"]}>Chief Engineer</h3>
            <p className={styles["crew-card-p"]}>
              With her extensive background in aerospace engineering, Hana Lee is responsible for
              the state-of-the-art technology that powers our spacecraft. Her innovation ensures
              that our travelers are always in safe hands.
            </p>
          </div>
        </div>
        <div className={styles["crew-card"]}>
          <img
            src="/crew/image-douglas-hurley.png"
            alt="Mission Specialist Alex Santos"
            className={styles["crew-card-img"]}
          />
          <div className={styles["crew-card-content"]}>
            <h2 className={styles["crew-card-h2"]}>Alex Santos</h2>
            <h3 className={styles["crew-card-h3"]}>Mission Specialist</h3>
            <p className={styles["crew-card-p"]}>
              As a mission specialist, Alex’s job is to ensure that every aspect of the journey runs
              smoothly. With a background in both science and adventure tourism, Alex is the perfect
              guide for our space travelers.
            </p>
          </div>
        </div>
        <div className={styles["crew-card"]}>
          <img
            src="/crew/Maya-Patel.png"
            alt="Crew Member Maya Patel"
            className={styles["crew-card-img"]}
          />
          <div className={styles["crew-card-content"]}>
            <h2 className={styles["crew-card-h2"]}> Maya Patel</h2>
            <h3 className={styles["crew-card-h3"]}>Crew Member</h3>
            <p className={styles["crew-card-p"]}>
              Maya brings a unique blend of technical skills and customer service experience to the
              team. She’s always ready to assist with any needs and to make sure every traveler has
              an unforgettable experience.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurCrew;
