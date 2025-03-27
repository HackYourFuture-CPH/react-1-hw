import styles from './page.module.css';
import './crew.css';


const OurCrew = () => {
    // TASK - React 1 week 1
    // Create the "Our Crew section"
    // Use the descriptions provided in /app/about_us/README.md
    // Use the pictures from /public/crew
    // Some inspiration ideas found in /data/inspiration_about_us
    const crew = [
        {
            title: "Captain",
            name: "Sarah Vega",
            bio: "A former NASA astronaut with over 15 years of experience, Captain Vega leads our missions with unparalleled expertise and a passion for space exploration.",
            image: "/crew/image-anousheh-ansari.png"
        },
        {
            title: "Dr.",
            name: "Leo Redding",
            bio: "Our chief astrophysicist, Dr. Redding, is a renowned scientist who has contributed to major space discoveries. He ensures that every journey is as educational as it is exhilarating.",
            image: "/crew/image-douglas-hurley.png"
        },
        {
            title: "Chief Engineer",
            name: "Hana Lee",
            bio: "With her extensive background in aerospace engineering, Hana Lee is responsible for the state-of-the-art technology that powers our spacecraft. Her innovation ensures that our travelers are always in safe hands.",
            image: "/crew/image-mark-shuttleworth.png"
        },
        {
            title: "Mission Specialist",
            name: "Alex Santos",
            bio: "As a mission specialist, Alex’s job is to ensure that every aspect of the journey runs smoothly. With a background in both science and adventure tourism, Alex is the perfect guide for our space travelers.",
            image: "/crew/image-victor-glover.png"
        },
        {
            title: "Crew Member",
            name: "Maya Patel",
            bio: "Maya brings a unique blend of technical skills and customer service experience to the team. She’s always ready to assist with any needs and to make sure every traveler has an unforgettable experience.",
            image: "/crew/image-anousheh-ansari.png"
        }
        
    ];
    
    
    return (
        <div className='crewContainer'>
            <p className='intro'>Our crew is the heart and soul of Galactica. We are a diverse team of seasoned space explorers, engineers, and visionaries who are united by a common goal: to make space travel accessible and exciting for all.</p>
            <div id='crewCards'>
                {
                    crew.map((item)=>(
                        <div className='crewMember'>
                            <img className='crewMemberProfilePhoto' src={item.image} alt={item.name}/>
                            <h2 className='crewMemberName'>{item.name}</h2>
                            <h3 className='crewMemberTitle' >{item.title}</h3>
                            <p className='crewMemberBio'>{item.bio}</p>
                        </div>
                    ))      
                }
            </div>
        </div>
       
    
    );
  }

  

export default OurCrew;