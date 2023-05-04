import React from "react";
import { Link } from "react-router-dom";
import styles from "./home.module.scss";

const Home = () => {
  return (
    <>
      <div className={styles.home}>Home</div>
      <Link to="about">About</Link>
      <Link to="shows">Shows</Link>
    </>
  );
};

export default Home;
