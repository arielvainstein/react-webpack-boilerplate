import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "../routes/home";
import About from "../routes/about";
import Shows from "../routes/shows";
import "./styles.module.scss";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Shows />} />
    </Routes>
  </BrowserRouter>
);

export default App;
