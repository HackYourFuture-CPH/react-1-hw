import styles from './OurPartners.module.css';

const OurPartners = () => {
    // TASK - React 1 week 1
    // Create the "Our Crew section"
    // Use the descriptions provided in /app/about_us/README.md
    // Use the pictures from /public/crew
    // Some inspiration ideas found in /data/inspiration_about_us
    return (
      <div className= {`${styles.app} ${styles.partners}`}> 
      We collaborate with some of the most respected names in the space and technology industries to make every journey extraordinary. 
      
      <div className={styles.partnersContainer}>
      <div className={styles.partnersLogo}>
      <img 
      src="/business_partners/alphabet-logo.png"
      alt="Alphabet Logo"
      className={styles.logoImage}/>
      </div>
  
      <div className={styles.partnersLogo}>
      <img 
      src="/business_partners/amazon_logo.png"
      alt="amazon logo"
      className={styles.logoImage}/>
      </div>
  
      <div className={styles.partnersLogo}>
      <img 
      src="/business_partners/CBC_Logo_White.png"
      alt="CBC Logo"
      className={styles.logoImage}/>
      </div>
  
  
      <div className={styles.partnersLogo}>
      <img 
      src="/business_partners/Microsoft-Logo-white.png"
      alt="Microsoft Logo"
      className={styles.logoImage}/>
      </div>
  
      <div className={styles.partnersLogo}>
      <img 
      src="/business_partners/nyu-logo.png"
      alt="nyu Logo"
      className={styles.logoImage}/>
      </div>
  
      <div className={styles.partnersLogo}>
      <img 
      src="/business_partners/QueensLogo_white.png"
      alt="Queens Logo"
      className={styles.logoImage}/>
      </div>
  
      <div className={styles.partnersLogo}>
      <img 
      src="/business_partners/samsung-logo.png"
      alt="Samsung Logo"
      className={styles.logoImage}/>
      </div>
  
      <div className={styles.partnersLogo}>
      <img 
      src="/business_partners/sodexo-logo.png"
      alt="Sodexo Logo"
      className={styles.logoImage}/>
      </div>   
  
      </div>
      </div>
  
  
    );
  }

  export default OurPartners;