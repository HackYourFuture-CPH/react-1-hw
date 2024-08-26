const partners = [
  { partner: "alphabet", logo: "/business_partners/alphabet-logo.png" },
  { partner: "amazon", logo: "/business_partners/amazon_logo.png" },
  { partner: "CBC", logo: "/business_partners/CBC_Logo_White.png" },
  { partner: "Microsoft", logo: "/business_partners/Microsoft-Logo-white.png" },
  { partner: "nyu", logo: "/business_partners/nyu-logo.png" },
  { partner: "Queens", logo: "/business_partners/QueensLogo_white.ong" },
  { partner: "samsung", logo: "/business_partners/samsung-logo.png" },
  { partner: "sodexo", logo: "/business_partners/sodexo-logo.png" },
];

const OurPartners = () => {
  // Some inspiration ideas found in /data/inspiration_about_us
  return (
    <>
      <p>
        We collaborate with some of the most respected names in the space and
        technology industries to make every journey extraordinary.
      </p>
      <ul>
        {partners.map((image,index) => (
          <li key={index}>
            <img src={image.logo} alt={image.partner} />;
          </li>
        ))}
      </ul>
    </>
  );
};

export default OurPartners;
