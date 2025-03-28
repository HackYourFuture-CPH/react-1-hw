import styles from "../page.module.css";
export const OurCrew = () => {
  return (
    <div className={styles.members} id={styles.mebersContainer}>
      <p className={styles.crewDesc}>
        Our crew is the heart and soul of Galactica. We are a diverse team of
        seasoned space explorers, engineers, and visionaries who are united by a
        common goal: to make space travel accessible and exciting for all.
      </p>
      <div>
        <img src="/crew/image-anousheh-ansari.png" alt="Captain Sarah Vega" />
        <p>Captain Sarah Vega:</p>
        <p>
          A former NASA astronaut with over 15 years of experience, Captain Vega
          leads our missions with unparalleled expertise and a passion for space
          exploration.
        </p>
      </div>
      <div>
        <img src="/crew/image-douglas-hurley.png" alt="leo redding" />
        <p>Dr. Leo Redding:</p>
        <p>
          Our chief astrophysicist, Dr. Redding, is a renowned scientist who has
          contributed to major space discoveries. He ensures that every journey
          is as educational as it is exhilarating.
        </p>
      </div>
      <div>
        <img src="/crew/image-victor-glover.png" alt="Hana Lee" />
        <p>Chief Engineer Hana Lee:</p>
        <p>
          With her extensive background in aerospace engineering, Hana Lee is
          responsible for the state-of-the-art technology that powers our
          spacecraft. Her innovation ensures that our travelers are always in
          safe hands.
        </p>
      </div>
      <div>
        <img src="/crew/image-mark-shuttleworth.png" alt="Alex" />
        <p>Mission Specialist Alex Santos:</p>
        <p>
          As a mission specialist, Alex’s job is to ensure that every aspect of
          the journey runs smoothly. With a background in both science and
          adventure tourism, Alex is the perfect guide for our space travelers.
        </p>
      </div>
      <div>
        <img src="/crew/image-mark-shuttleworth.png" alt="Alex" />
        <p> Crew Member Maya Patel:</p>
        <p>
          Maya brings a unique blend of technical skills and customer service
          experience to the team. She’s always ready to assist with any needs
          and to make sure every traveler has an unforgettable experience.
        </p>
      </div>
    </div>
  );
};
