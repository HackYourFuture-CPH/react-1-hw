import styles from './page.module.css';

const values = [
    {
        id: 1,
        title: '1) Exploration',
        description: 'We are driven by a deep-seated desire to explore the unknown. We believe that the pursuit of discovery is at the heart of human nature, and we are committed to pushing the boundaries of what is possible.',

    },
    {
        id: 2,
        title: '2) Innovation',
        description: 'At Galactica, we prioritize cutting-edge technology and innovation. We are constantly evolving our spacecraft, safety protocols, and services to ensure that our travelers experience the most advanced and secure space journeys available.'
    },
    {
        id: 3,
        title: '3) Sustainability',
        description: 'We are committed to making space exploration sustainable for future generations. Our space missions are designed to minimize environmental impact, both on Earth and in space, and to foster a spirit of responsibility towards our universe.',

    },
    {
        id: 4,
        title: '4) Community',
        description: 'We believe in the power of community. Our crew and travelers form a unique bond that transcends borders and backgrounds. We are dedicated to creating a welcoming and inclusive environment for everyone who shares our passion for space.'
    },
    {
        id: 5,
        title: '5) Safety',
        description: 'We believe in the power of collective exploration. Our journeys are not just about reaching new destinations; they are about building a community of space enthusiasts who share a passion for the stars.'

    },
];
const OurValues = () => {
    return (
        <section className={styles.ourValuesMission}>
            <h1>Our mission & Values</h1>
            <p>At Galactica, we are driven by our core values that guide our mission and shape our culture. These values reflect our commitment to exploration, innovation, sustainability, community, and safety.</p>

            <div className={styles.ourValuesContainer}>
                <div className={styles.ourValuesDescription}>
             
                    <div className={styles.valuesList}>
                        {values.map((value) => (
                            <div key={value.id} className={styles.valueCard}>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>


                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>

    );
};

export default OurValues;