import styles from "./ourCrew.module.css"; // Adjust the path as necessary

const OurCrew = () => {
  return (
    <div className={styles.crewSection}>
      <p>
        Meet the dedicated team behind our success. Each member brings unique
        skills and passion to our mission.
      </p>
      <div className={styles.crewMembers}>
        <div className={styles.crewMember}>
          <img src="/crew/image-mark-shuttleworth.png" alt="Crew Member 1" />
          <h3>Sarah Vega</h3>
          <p>Captain</p>
          <p>
            A former NASA astronaut with over 15 years of experience, Captain
            Vega leads our missions with unparalleled expertise and a passion
            for space exploration.
          </p>
        </div>
        <div className={styles.crewMember}>
          <img src="/crew/image-douglas-hurley.png" alt="Crew Member 2" />
          <h3>Dr. Leo Redding</h3>
          <p>chief astrophysicist</p>
          <p>
            Dr. Redding, is a renowned scientist who has contributed to major
            space discoveries. He ensures that every journey is as educational
            as it is exhilarating.
          </p>
        </div>
        <div className={styles.crewMember}>
          <img src="/crew/image-victor-glover.webp" alt="Crew Member 3" />
          <h3>Hana Lee</h3>
          <p>Chief Engineer</p>
          <p>
            Dr. Redding, is a renowned scientist who has contributed to major
            space discoveries. He ensures that every journey is as educational
            as it is exhilarating.
          </p>
        </div>
        <div className={styles.crewMember}>
          <img src="/crew/image-anousheh-ansari.webp" alt="Crew Member 4" />
          <h3>Alex Santos</h3>
          <p>Mission Specialist</p>
          <p>
            As a mission specialist, Alex’s job is to ensure that every aspect
            of the journey runs smoothly. With a background in both science and
            adventure tourism, Alex is the perfect guide for our space
            travelers.
          </p>
        </div>
        <div className={styles.crewMember}>
          <img src="/crew/image-mark-shuttleworth.webp" alt="Crew Member 5" />
          <h3>Maya Patel</h3>
          <p>Crew Member</p>
          <p>
            Maya brings a unique blend of technical skills and customer service
            experience to the team. She’s always ready to assist with any needs
            and to make sure every traveler has an unforgettable experience.
          </p>
        </div>
        {/* Add more crew members as needed */}
      </div>
    </div>
  );
};

export default OurCrew;
