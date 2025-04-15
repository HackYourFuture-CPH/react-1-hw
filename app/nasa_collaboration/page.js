"use client";

import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import RoverPhotos from '@/components/nasaCollaboration/RoverPhoto';

// Read "/app/nasa_collaboration/README.md" for more info about the API_KEY
// You need a proper API_KEY for the requests to work
const API_KEY = 'U4Fa0QGbbNH4cEh0u0NdUGglk2fb5G6RrjlG5oHG';

const NASA_URLs = {
  astronomyPicOfTheDay: `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`,
  marsRoverPhoto: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${API_KEY}`,
};

export const NasaCollaboration = () => {
  const [dailyImg, setDailyImg] = useState({});
  const [roverPhoto, setRoverPhoto] = useState({});

  useEffect(() => {
    const fetchRoverPhotos = async () => {
      const roverPhotoResponse = await fetch(NASA_URLs.marsRoverPhoto).then(response => response.json());
      setRoverPhoto(roverPhotoResponse);
      console.log(roverPhotoResponse)
    };

    fetchRoverPhotos();

   
   const fetchApodPhotos = async () => {
      const apodResponse = await fetch(NASA_URLs.astronomyPicOfTheDay)
      const data = await apodResponse.json()
      setDailyImg(data)
    };

    fetchApodPhotos();
  }, []);

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Collaboration with NASA</h1>
        <section className="card">
          <h2>Astronomy Picture of the day</h2>
          <h2>{dailyImg.title}</h2>
          <p>{dailyImg.explanation}</p>
          <img src={dailyImg.url} />
        </section>
        <section className="card">
          <h2>Rover Photos</h2>
          {
            
            roverPhoto?.photos?.length ? (

              <>
              {roverPhoto?.photos?.map((photo) => {

                return( 
                  <RoverPhotos
                  src={photo.img_src}
                  key={photo.id}
                  date={photo.earth_date}
                  roverName={photo.rover.name}
                  />
            );
            })}


              </>
              ) : (
                <p>Loading rover photos...</p>
              )
            }
        </section>
      </main>
    </div>
  );
}

export default NasaCollaboration;
