const OurPartners = () => {
  // TASK - React 1 week 1
  // Create the "Our Crew section"
  // Use the descriptions provided in /app/about_us/README.md
  // Use the pictures from /public/crew
  // Some inspiration ideas found in /data/inspiration_about_us

  const partners = [
    "/business_partners/alphabet-logo.png",
    "/business_partners/amazon_logo.png",
    "/business_partners/CBC_Logo_White.png",
    "/business_partners/Microsoft-Logo-White.png",
    "/business_partners/nyu-logo.png",
    "/business_partners/QueensLogo-White.png",
    "/business_partners/samsung-logo.png",
    "/business_partners/sodexo-logo.png"
];

return (
    <section style={{ padding: "20px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Our Partners</h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "30px" }}>
            {partners.map((logo, index) => (
                <div key={index} style={{ border: "1px solid #ddd", padding: "15px", borderRadius: "8px", width: "150px" }}>
                    <img src={logo} alt={`Partner ${index + 1}`} style={{ width: "100%", objectFit: "contain" }} />
                </div>
            ))}
        </div>
    </section>
);
}

export default OurPartners;