"use client";
import { useState } from "react";
import Image from "next/image"; 

const teamMembers = [
  { name: "captain Sarah Vegara", role: "A former NASA astronaut with over 15 years of experience, Captain Vega leads our missions with unparalleled expertise and a passion for space exploration.", image: "/crew/alice.jpg" },
  { name: "Dr Leo Redding ", role: "Our chief astrophysicist, Dr. Redding, is a renowned scientist who has contributed to major space discoveries. He ensures that every journey is as educational as it is exhilarating.", image: "/crew/bob.jpg" },
  { name: "Chief Engineer Harah Lee ", role: "With her extensive background in aerospace engineering, Hana Lee is responsible for the state-of-the-art technology that powers our spacecraft. Her innovation ensures that our travelers are always in safe hands.", image: "/crew/charlie.jpg" },
  { name: "Mission specialist Alex Santos ", role: "We collaborate with some of the most respected names in the space and technology industries to make every journey extraordinary. Our partners bring expertise, innovation, and cutting-edge advancements that enhance our space travel experiences.", image: "/crew/diana.jpg" },
  { name: "Pr Aminata Ba", role: "Aminata brings a unique blend of technical skills and customer service experience to the team. She’s always ready to assist with any needs and to make sure every traveler has an unforgettable experience.", image: "/crew/aminata.jpg" }, 
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
      <p>Our crew is the heart and soul of Galactica. We are a diverse team of seasoned space explorers, engineers, and visionaries who are united by a common goal: to make space travel accessible and exciting for all.</p>
      <div className="carousel">
        <button onClick={prevSlide} className="carousel-btn"> next </button>
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
