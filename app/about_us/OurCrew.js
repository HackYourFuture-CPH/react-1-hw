const OurCrew = () => {
    const crewMembers = [
      { name: "Alex Johnson", role: "Captain", image: "react-1-hw/app/about_us/Boulder_Worldcup_Vienna_28-05-2010_quali-w100_Alex_Johnson.jpg" },
      { name: "Jordan Smith", role: "Engineer", image: "D:\HYF\Homework\class30-homework\react\react1\week1\react-1-hw\app\about_us\D52_5662.jpg" },
      { name: "Taylor Lee", role: "Navigator", image: "D:\HYF\Homework\class30-homework\react\react1\week1\react-1-hw\app\about_us\Taylor-Lee-scaled.jpg" },
      { name: "Morgan Davis", role: "Communications", image: "D:\HYF\Homework\class30-homework\react\react1\week1\react-1-hw\app\about_us\Morgan.webp"},
    ];
  
    return (
      <section className="Crews">
        <div>
          {crewMembers.map((member, index) => (
            <div key={index}>
              <img
                src={member.image}
                alt={member.name}
              />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };