import styles from "./page.module.css";

const crewMembers = [
  {
    name: "Captain Sarah Vega",
    title: "Astronaut",
    description:
      "A former NASA astronaut with over 15 years of experience, Captain Vega leads our missions with unparalleled expertise and a passion for space exploration.",
    image: "crew/image-anousheh-ansari.png",
    alt: "Captain Sarah Vega - Astronaut",
  },
  {
    name: "Dr. Leo Redding",
    title: "Chief Astrophysicist",
    description:
      "Our chief astrophysicist, Dr. Redding, is a renowned scientist who has contributed to major space discoveries. He ensures that every journey is as educational as it is exhilarating.",
    image: "crew/image-douglas-hurley.png",
    alt: "Dr. Leo Redding - Chief Astrophysicist",
  },
  {
    name: "Alex Santos",
    title: "Mission Specialist",
    description:
      "As a mission specialist, Alex’s job is to ensure that every aspect of the journey runs smoothly. With a background in both science and adventure tourism, Alex is the perfect guide for our space travelers.",
    image: "crew/image-victor-glover.png",
    alt: "Alex Santos - Mission Specialist",
  },
  {
    name: "Maya Patel",
    title: "Crew Member",
    description:
      "Maya brings a unique blend of technical skills and customer service experience to the team. She’s always ready to assist with any needs and to make sure every traveler has an unforgettable experience.",
    image: "crew/image-mark-shuttleworth.png",
    alt: "Maya Patel - Crew Member",
  },
  {
    name: "Hana Lee",
    title: "Chief Engineer",
    description:
      "With her extensive background in aerospace engineering, Hana Lee is responsible for the state-of-the-art technology that powers our spacecraft. Her innovation ensures that our travelers are always in safe hands.",
    image: "crew/image-anousheh-ansari.png",
    alt: "Hana Lee - Chief Engineer",
  },
];

export const OurCrew = () => {
  return (
    <section>
      <p className={styles.text_crew}>
        Our crew is the heart and soul of Galactica. We are a diverse team of
        seasoned space explorers, engineers, and visionaries who are united by a
        common goal: to make space travel accessible and exciting for all.
      </p>
      <div className={styles.container_crew}>
        {crewMembers.map((member, index) => (
          <div className={styles.item_crew} key={index}>
            <div className={styles.image_crew}>
              <img src={member.image} alt={member.alt} />
            </div>
            <div className={styles.name_crew}>{member.name}</div>
            <div className={styles.title_crew}>{member.title}</div>
            <p className={styles.description_crew}>{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
