import styles from "./page.module.css"
const OurPartners = () => {
    return (
      <div className={styles.pContainer}>
        <p>Our Partners</p>
        <h1>We Collaborate with progressive, ambitious brands we believe in.</h1>
        <div className={styles.partnersContainer}>
  
        <div className={styles.partnersBox}>
            <img src={"/business_partners/amazon_logo.png"}></img>
          </div>
  
          <div className={styles.partnersBox}>
            <img src={"/business_partners/alphabet-logo.png"}></img>
          </div>
  
          <div className={styles.partnersBox}>
            <img src={"/business_partners/nyu-logo.png"}></img>
          </div>
  
          <div className={styles.partnersBox}>
            <img src={"/business_partners/CBC_Logo_white.png"}></img>
          </div>
  
          <div className={styles.partnersBox}>
            <img src={"/business_partners/QueensLogo_white.png"}></img>
          </div>
  
          <div className={styles.partnersBox}>
            <img src={"/business_partners/samsung-logo.png"}></img>
          </div>
  
        </div>
          
      </div>
    );
  }

  export default OurPartners;