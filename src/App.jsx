import React from "react";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Plans from "./pages/plans/Plans";
import Contact from "./pages/contact/Contact";
import Gallery from "./pages/gallery/Gallery";
import NotFound from "./pages/notFound/NotFound";
import Trainers from "./pages/trainers/Trainers";
import Navbar from "./component/Navbar";
import Footer from './component/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route exact path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer/>  
    </BrowserRouter>
  );
};

export default App;
