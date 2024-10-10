import styles from "./page.module.css";

export const OurPartners = () => {
  return (
    <section>
      <p className={styles.text_partners}>
        We collaborate with some of the most respected names in the space and
        technology industries to make every journey extraordinary.
      </p>
      <div className={styles.container_partners}>
        <div className={styles.item_partners}>
          <img
            className={styles.image_partners}
            src={"business_partners/alphabet-logo.png"}
            alt={"Alphabet company logo"}
          />
        </div>
        <div className={styles.item_partners}>
          <img
            className={styles.image_partners}
            src={"business_partners/amazon_logo.png"}
            alt={"Amazon company logo"}
          />
        </div>
        <div className={styles.item_partners}>
          <img
            className={styles.image_partners}
            src={"business_partners/CBC_Logo_White.png"}
            alt={"CBC Logo in White"}
          />
        </div>
        <div className={styles.item_partners}>
          <img
            className={styles.image_partners}
            src={"business_partners/Microsoft-Logo-white.png"}
            alt={"Microsoft Logo in white"}
          />
        </div>
        <div className={styles.item_partners}>
          <img
            className={styles.image_partners}
            src={"business_partners/nyu-logo.png"}
            alt={"NYU logo"}
          />
        </div>
        <div className={styles.item_partners}>
          <img
            className={styles.image_partners}
            src={"business_partners/QueensLogo_white.png"}
            alt={"Queens University logo in white"}
          />
        </div>
        <div className={styles.item_partners}>
          <img
            className={styles.image_partners}
            src={"business_partners/samsung-logo.png"}
            alt={"Samsung company logo"}
          />
        </div>
        <div className={styles.item_partners}>
          <img
            className={styles.image_partners}
            src={"business_partners/sodexo-logo.png"}
            alt={"Sodexo company logo"}
          />
        </div>
      </div>
    </section>
  );
};
