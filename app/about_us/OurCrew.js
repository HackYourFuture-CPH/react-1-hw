import styles from './page.module.css';

const crewMembers = () => [
    <p>Our crew is the heart and soul of Galactica. We are a diverse team of seasoned space explorers, engineers, and visionaries who are united by a common goal: to make space travel accessible and exciting for all.</p>,
  
    {
        id: 1,
        name: 'Sarah Vega',
        role: 'Captain',
        imgUrl: '../crew/image-anousheh-ansari.png',
        description: 'A former NASA astronaut with over 15 years of experience, Captain Vega leads our missions with unparalleled expertise and a passion for space exploration. She is dedicated to ensuring the safety and success of every journey, while inspiring our crew and passengers to reach for the stars.',
    },
    {
        id: 2,
        name: "Dr. Leo Redding",
        role: "Chief Astrophysicist",
        imgUrl: "../crew/image-douglas-hurley.png",
        description:"Dr. Redding, is a renowned scientist who has contributed to major space discoveries. He ensures that every journey is as educational as it is exhilarating.",
      },
      {
        id: 3,
        name: "Chief Engineer Hana Lee",
        role: "Chief Engineer",
        imgUrl: "../crew/image-anousheh-ansari.png",
        description:"With her extensive background in aerospace engineering, Hana Lee is responsible for the state-of-the-art technology that powers our spacecraft. Her innovation ensures that our travelers are always in safe hands.",
      },
      { 
        id: 4,
        name: "Mission Specialist Alex Santos",
        role: "Mission Specialist",
        imgUrl: "../crew/image-victor-glover.png",
        description:"Alex’s job is to ensure that every aspect of the journey runs smoothly. With a background in both science and adventure tourism, Alex is the perfect guide for our space travelers.",
      },
      {
        id: 5,
        name: "Crew Member Maya Patel",
        role:"Customer Service Specialist", 
        imgUrl: "../crew/image-mark-shuttleworth.png",
        description:
          "Maya brings a unique blend of technical skills and customer service experience to the team. She’s always ready to assist with any needs and to make sure every traveler has an unforgettable experience.",
      },

    ];
const OurCrew = () => {
    return (
        <div className={styles.crewContainer}>
        <div className={styles.crewDescription}>
            <p>Our crew is the heart and soul of Galactica. We are a diverse team of seasoned space explorers, engineers, and visionaries who are united by a common goal: to make space travel accessible and exciting for all.</p>
            </div>
            <div className={styles.crewMembers}>
            {crewMembers().map((member) => (
                <div key={member.id} className={styles.memberCard}>
                    <img src={member.imgUrl} alt={member.name} />
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                    <p>{member.description}</p>
                </div>
            ))}
        </div>
        </div>
    );
}
export default OurCrew;
