import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./routes/home";
import About from "./routes/about";
import Shows from "./routes/shows";
import Login from "./routes/login";
import "./styles.module.scss";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="shows" element={<Shows />} />
      <Route path="login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);

export default App;
