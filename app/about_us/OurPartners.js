import styles from './page.module.css';

const partners = [
    {
        id: 1,
        name: 'Alphabet',
        imgUrl:'../business_partners/alphabet-logo.png',

    },
    {   id: 2,
        name: 'Amazon',
        imgUrl: '../business_partners/amazon_logo.png',
    },
    {
        id: 3,
        name: 'CBC',
        imgUrl: '../business_partners/CBC_Logo_White.png',
    },
    {   id: 4,
        name: 'Microsoft',
        imgUrl: '../business_partners/Microsoft-Logo-white.png',
    },
    {
        id: 5,
        name: 'Nyu',
        imgUrl: '../business_partners/nyu-logo.png',
    },
    {
        id: 6,
        name: 'QueensLogo',
        imgUrl: '../business_partners/QueensLogo_white.png',
    },
    {
        id: 7,
        name: 'Samsung',
        imgUrl: '../business_partners/samsung-logo.png',
    },
    {
        id: 8,
        name: 'Sodexo',
        imgUrl: '../business_partners/sodexo-logo.png',
    },
];
const OurPartners = () => {
    return (
        <div className={styles.ourPartnersContainer}>
        <div className={styles.ourPartnerDescription}>
            <p> We are proud to partner with leading organizations in the tech industry. Our partners share our commitment to innovation, excellence, and making a positive impact in the world.</p>
            </div>
            <div className={styles.partnersLogos}>
                {partners.map((partner) => (
                    <div key={partner.id} className={styles.partnerCard}>
                        <img src={partner.imgUrl} alt={partner.name} />
               
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurPartners;
