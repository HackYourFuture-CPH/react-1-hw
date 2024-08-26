const crew = [
  {
    titleAndName: "Captain Sarah Vega",
    duties:
      "A former NASA astronaut with over 15 years of experience, Captain Vega leads our missions with unparalleled expertise and a passion for space exploration.",
    image: "/crew/image-anousheh-ansari.png",
  },
  {
    titleAndName: "Dr. Leo Redding",
    duties:
      "Our chief astrophysicist, Dr. Redding, is a renowned scientist who has contributed to major space discoveries. He ensures that every journey is as educational as it is exhilarating.",
    image: "/crew/image-douglas-hurley.png",
  },
  {
    titleAndName: "Chief Engineer Hana Lee",
    duties:
      "With her extensive background in aerospace engineering, Hana Lee is responsible for the state-of-the-art technology that powers our spacecraft. Her innovation ensures that our travelers are always in safe hands.",
    image: "/crew/image-mark-shuttleworth.png",
  },
  {
    titleAndName: "Mission Specialist Alex Santos",
    duties:
      "As a mission specialist, Alex’s job is to ensure that every aspect of the journey runs smoothly. With a background in both science and adventure tourism, Alex is the perfect guide for our space travelers.",
    image: "/crew/image-victor-glover.png",
  },
  {
    titleAndName: "Crew Member Maya Patel",
    duties:
      "Maya brings a unique blend of technical skills and customer service experience to the team. She’s always ready to assist with any needs and to make sure every traveler has an unforgettable experience.",
    image: "/crew/image-victor-glover.png",
  },
];

const OurCrew = () => {
  return (
    <>
      <ul>
        {crew.map((member) => (
          <li>
            <div>{member.titleAndName}</div>
            <div>{member.duties}</div>
            <img src={member.image} alt={member.titleAndName} />
          </li>
        ))}
      </ul>
    </>
  );
};
export default OurCrew;
