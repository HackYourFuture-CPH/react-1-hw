"use client";
import { useState } from "react";
import Image from "next/image"; // Next.js Image component

const teamMembers = [
  { name: "Alice Johnson", role: "Aerospace Engineer", image: "/crew/alice.jpg" },
  { name: "Bob Smith", role: "Mission Control Director", image: "/crew/bob.jpg" },
  { name: "Charlie Brown", role: "Spacecraft Designer", image: "/crew/charlie.jpg" },
  { name: "Diana Prince", role: "Astrophysicist", image: "/crew/diana.jpg" },
  { name: "Aminata Ba", role: "IT Specialist", image: "/crew/aminata.jpg" }, // ✅ Added Aminata
];

const OurCrew = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <p>🌌 WE ARE GALACTICA:</p>
      <p>Meet the experts pioneering the next generation of space exploration:</p>

      <div className="carousel">
        <button onClick={prevSlide} className="carousel-btn">❮</button>
        <div className="carousel-slide">
          <Image
            src={teamMembers[currentIndex].image}
            alt={teamMembers[currentIndex].name}
            width={150}
            height={150}
            className="crew-image"
          />
          <h3>{teamMembers[currentIndex].name}</h3>
          <p>{teamMembers[currentIndex].role}</p>
        </div>
        <button onClick={nextSlide} className="carousel-btn">❯</button>
      </div>
    </div>
  );
};

export default OurCrew;
