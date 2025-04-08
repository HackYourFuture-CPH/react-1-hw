import styles from './page.module.css';

const partners = [
    {
        id: 1,
        name: 'Alphabet',
        imgUrl:'public/business_partners/alphabet-logo.png',

    },
    {   id: 2,
        name: 'Amazon',
        imgUrl: 'public/business_partners/amazon_logo.png',
    },
    {
        id: 3,
        name: 'CBC',
        imgUrl: 'public/business_partners/CBC_Logo_White.png',
    },
    {   id: 4,
        name: 'Microsoft',
        imgUrl: 'public/business_partners/Microsoft-Logo-white.png',
    },
    {
        id: 5,
        name: 'Nyu',
        imgUrl: 'public/business_partners/nyu-logo.png',
    },
    {
        id: 6,
        name: 'QueensLogo',
        imgUrl: 'public/business_partners/QueensLogo_white.png',
    },
    {
        id: 7,
        name: 'Samsung',
        imgUrl: 'public/business_partners/samsung-logo.png',
    },
    {
        id: 8,
        name: 'Sodexo',
        imgUrl: 'public/business_partners/sodexo-logo.png',
    },
];
const OurPartners = () => {
    return (
        <div className={styles.ourPartners}>
        <div clasName={styles.ourPartnerDescription}>
            <h2>Our Partners</h2>
            <p> We are proud to partner with leading organizations in the tech industry. Our partners share our commitment to innovation, excellence, and making a positive impact in the world.</p>
            </div>
            <div className={styles.partnersLogos}>
                {partners.map((partner) => (
                    <div key={partner.id} className={styles.partnerCard}>
                        <img src={partner.imgUrl} alt={partner.name} />
                        <p>{partner.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurPartners;
