import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import "./styles.module.scss";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path='*' exact={true} component={<Contact />} />
    </Routes>
  </BrowserRouter>
);

export default App;
