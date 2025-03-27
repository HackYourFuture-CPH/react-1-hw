const OurValues = () => {
    const values = [
      { title: "Integrity", description: "We uphold the highest standards of honesty and ethics in all we do." },
      { title: "Innovation", description: "We embrace creativity and strive for continuous improvement." },
      { title: "Collaboration", description: "We work together to achieve more than we could alone." },
      { title: "Customer Focus", description: "Our customers are at the center of everything we do." },
    ];
    return (
    <section className="values">
      <div>
      {values.map((value, index) => (
            <div key={index}>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
      </div>
    </section>
    );
  };