import styles from "./OurCrew.module.css";

const crew = [
  {
    name: "Sarah Vega",
    title: "Captain",
    duties:
      "A former NASA astronaut with over 15 years of experience, Captain Vega leads our missions with unparalleled expertise and a passion for space exploration.",
    image: "/crew/image-anousheh-ansari.png",
  },
  {
    name: "Leo Redding",
    title: "Dr.",
    duties:
      "Our chief astrophysicist, Dr. Redding, is a renowned scientist who has contributed to major space discoveries. He ensures that every journey is as educational as it is exhilarating.",
    image: "/crew/image-douglas-hurley.png",
  },
  {
    name: "Hana Lee",
    title: "Chief Engineer",
    duties:
      "With her extensive background in aerospace engineering, Hana Lee is responsible for the state-of-the-art technology that powers our spacecraft. Her innovation ensures that our travelers are always in safe hands.",
    image: "/crew/image-mark-shuttleworth.png",
  },
  {
    name: "Alex Santos",
    title: "Mission Specialist",
    duties:
      "As a mission specialist, Alex’s job is to ensure that every aspect of the journey runs smoothly. With a background in both science and adventure tourism, Alex is the perfect guide for our space travelers.",
    image: "/crew/image-victor-glover.png",
  },
  {
    name: "Maya Patel",
    title: "Crew Member",
    duties:
      "Maya brings a unique blend of technical skills and customer service experience to the team. She’s always ready to assist with any needs and to make sure every traveler has an unforgettable experience.",
    image: "/crew/Maya-Patel.png",
  },
];

const OurCrew = () => {
  return (
    <>
      <p>
        Our crew is the heart and soul of Galactica. We are a diverse team of
        seasoned space explorers, engineers, and visionaries who are united by a
        common goal: to make space travel accessible and exciting for all.
      </p>
      <ul className={styles.ulContainer}>
        {crew.map((member, index) => (
          <li key={index} className={styles.listItem}>
            <img
              src={member.image}
              alt={member.name}
              className={styles.image}
            />
            <div className={styles.name}>{member.name}</div>
            <div className={styles.title}>{member.title}</div>
            <div className={styles.duties}>{member.duties}</div>
          </li>
        ))}
      </ul>
    </>
  );
};
export default OurCrew;
