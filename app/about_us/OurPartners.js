const OurPartners = () => {
    const partners = [
      { name: "TechCorp", logo: "/partners/techcorp.png" },
      { name: "InnovateX", logo: "/partners/innovatex.png" },
    ];
  
    return (
      <section className="partners">
        <div>
          {partners.map((partner, index) => (
            <div key={index}>
              <img
                src={partner.logo}
                alt={partner.name}
              
              />
              <h3>{partner.name}</h3>
            </div>
          ))};
        </div>
      </section>
    );
  };
  