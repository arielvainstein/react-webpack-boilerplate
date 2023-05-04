import React, { useState, useEffect, Suspense } from "react";
import Modal from "../../app/components/modal";
import styles from './shows.module.scss';

const Loading = () => {
  return <h2>🌀 Loading...</h2>;
};

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

const Contact = () => {
  return (
    <>
      <div>Contact</div>
      <Modal>
        <Suspense fallback={<Loading />}>
          <ShowsList />
        </Suspense>
      </Modal>
    </>
  );
};

export default Contact;
