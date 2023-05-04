import React, { useState, useEffect } from "react";
import styles from './ShowsList.module.scss';

const ShowsList = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/search/shows?q=heist`)
      .then((response) => {
        response.json().then((data) => {
          setShows(data);
          setIsLoaded(true);
        });
      })
      .catch((e) => {
        setIsLoaded(false);
        console.log(e);
      });
  }, []);

  return (
    <>
      {!isLoaded && <p>loading...</p>}
      {isLoaded && (
        <>
          {shows.map((show, index) => (
            <div key={index}>
              <img
                className={styles.showImage}
                src={show.show.image ? show.show.image.original : ""}
                alt="Show Poster"
              />

              <>
                {show.show.name}
                Score: {show.score}
                Status: {show.show.status}
                Network: {show.show.network ? show.show.network.name : "N/A"}
              </>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default ShowsList;
