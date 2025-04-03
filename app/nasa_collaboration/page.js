"use client";

import React, { useState, useEffect } from "react";
import styles from "./page.module.css";

// Read "/app/nasa_collaboration/README.md" for more info about the API_KEY
const API_KEY = "API_KEY";

const NASA_URLs = {
  astronomyPicOfTheDay: `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`,
  marsRoverPhoto: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${API_KEY}`,
};

// RoverPhoto comp
const RoverPhoto = ({ src, date, roverName }) => (
  <div className={styles.roverPhotoCard}>
    <img src={src} alt={`Photo taken by ${roverName}`} />
    <p><b>Rover:</b> {roverName}</p>
    <p><b>Date:</b> {date}</p>
  </div>
);

export const NasaCollaboration = () => {
  const [dailyImg, setDailyImg] = useState(null);
  const [roverPhotos, setRoverPhotos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch Picture of the Day
        const apodResponse = await fetch(NASA_URLs.astronomyPicOfTheDay);
        const apodData = await apodResponse.json();
        setDailyImg(apodData);

        // Fetch Mars Rover Photos
        const roverResponse = await fetch(NASA_URLs.marsRoverPhoto);
        const roverData = await roverResponse.json();
        setRoverPhotos(roverData.photos || []);
      } catch (error) {
        console.error("Error fetching data from NASA API:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Collaboration with NASA</h1>

        {/*  Picture of the Day */}
        <section className="card">
          <h2>Astronomy Picture of the Day</h2>
          {dailyImg ? (
            <>
              <h3>{dailyImg.title}</h3>
              <p>{dailyImg.explanation}</p>
              <img className={styles.nasaPicOfTheDayImg} src={dailyImg.url} alt={dailyImg.title} />
            </>
          ) : (
            <p>Loading astronomy picture...</p>
          )}
        </section>

        {/* Rover Photos */}
        <section className="card">
          <h2>Rover Photos</h2>
          {roverPhotos.length > 0 ? (
            <div className={styles.roverPhotosGrid}>
              {roverPhotos.map((photo) => (
                <RoverPhoto
                  key={photo.id}
                  src={photo.img_src}
                  date={photo.earth_date}
                  roverName={photo.rover.name}
                />
              ))}
            </div>
          ) : (
            <p>Loading rover photos...</p>
          )}
        </section>
      </main>
    </div>
  );
};

export default NasaCollaboration;
