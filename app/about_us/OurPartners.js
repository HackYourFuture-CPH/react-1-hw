import styles from "./OurPartners.module.css";

const OurPartners = () => {
  // TASK - React 1 week 1
  // Create the "Our Crew section"
  // Use the descriptions provided in /app/about_us/README.md
  // Use the pictures from /public/crew
  // Some inspiration ideas found in /data/inspiration_about_us
  return (
    <>
      <div className={styles["logo-container"]}>
        <img src="/business_partners/alphabet-logo.png"></img>
        <img src="/business_partners/amazon_logo.png"></img>
        <img src="/business_partners/CBC_Logo_White.png" style={{ marginTop: "-10px" }}></img>
        <img src="/business_partners/Microsoft-Logo-white.png"></img>
        <img src="/business_partners/QueensLogo_white.png"></img>
        <img src="/business_partners/nyu-logo.png" style={{ marginTop: "20px" }}></img>
        <img src="/business_partners/sodexo-logo.png" style={{ marginTop: "10px" }}></img>
        <img src="/business_partners/samsung-logo.png" style={{ marginTop: "20px" }}></img>
      </div>
    </>
  );
};

export default OurPartners;
