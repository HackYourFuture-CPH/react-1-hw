import styles from './page.module.css';
import './values.css';

const OurValues = () => {
    // TASK - React 1 week 1
    // Create the "Our Values" section
    // Use the descriptions provided in /app/about_us/README.md
    // Some inspiration ideas found in /data/inspiration_about_us
    
    const values = [
        {
          value: "Exploration",
          description: "We are driven by a deep-seated desire to explore the unknown. We believe that the pursuit of discovery is at the heart of human nature, and we are committed to pushing the boundaries of what is possible."
        },
        {
          value: "Innovation",
          description: "At Galactica, we prioritize cutting-edge technology and innovation. We are constantly evolving our spacecraft, safety protocols, and services to ensure that our travelers experience the most advanced and secure space journeys available."
        },
        {
          value: "Sustainability",
          description: "We are committed to making space exploration sustainable for future generations. Our space missions are designed to minimize environmental impact, both on Earth and in space, and to foster a spirit of responsibility towards our universe."},
        {
          value: "Community",
          description: "We believe in the power of collective exploration. Our journeys are not just about reaching new destinations; they are about building a community of space enthusiasts who share a passion for the stars."}
        ];
    

    
    return (
      <div className='container'>
        <h2 className='containerTitle'>What we live by</h2>
        <div className='values'>
        {
        values.map((item, index)=>(
            
            <div key={index} className='value'>
                <h2 className='number'>{index+1}</h2>
                <h2 className='name'>{item.value}</h2>
                <p className='valueDescription'>{item.description}</p>
            </div>
        ))
  }
      </div>
      </div>
    );
  };

export default OurValues;