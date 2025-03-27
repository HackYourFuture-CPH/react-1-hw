const OurCrew = () => {

  const crewMembers = [
    {
      name: "Captain Sarah Vega",
      role: "Captain",
      description: "A former NASA astronaut with over 15 years of experience, Captain Vega leads our missions with unparalleled expertise and a passion for space exploration.",
      image: "/crew/image-anousheh-ansari.png"
    },
    {
      name: "Dr. Leo Redding",
      role: "Chief Astrophysicist",
      description: "Dr. Redding is a renowned scientist who has contributed to major space discoveries. He ensures that every journey is as educational as it is exhilarating.",
      image: "/crew/image-douglas-hurley.png"
    },
    {
      name: "Chief Engineer Hana Lee",
      role: "Chief Engineer",
      description: "With her extensive background in aerospace engineering, Hana Lee is responsible for the state-of-the-art technology that powers our spacecraft. Her innovation ensures that our travelers are always in safe hands.",
      image: "/crew/image-mark-shuttleworth.png"
    },
    {
      name: "Mission Specialist Alex Santos",
      role: "Mission Specialist",
      description: "As a mission specialist, Alex’s job is to ensure that every aspect of the journey runs smoothly. With a background in both science and adventure tourism, Alex is the perfect guide for our space travelers.",
      image: "/crew/image-victor-glover.png"
    },
    {
      name: "Crew Member Maya Patel",
      role: "Crew Member",
      description: "Maya brings a unique blend of technical skills and customer service experience to the team. She’s always ready to assist with any needs and to make sure every traveler has an unforgettable experience.",
      image:  "/crew/image-mark-shuttleworth.png"
    }
  ];
  // TASK - React 1 week 1
  // Create the "Our Crew section"
  // Use the descriptions provided in /app/about_us/README.md
  // Use the pictures from /public/crew
  // Some inspiration ideas found in /data/inspiration_about_us
  return  (
    <section>
      <h2>Our Crew</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {crewMembers.map((member, index) => (
          <div key={index} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', width: '220px', textAlign: 'center' }}>
            <img src={member.image} alt={member.name} style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '5px' }} />
            <h3>{member.name}</h3>
            <h4>{member.role}</h4>
            <p>{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default OurCrew;