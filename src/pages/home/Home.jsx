import React from "react";
import "./home.css";
import Header from "../../component/MainHeader";
import Programs from "../../component/Programs";
import Values from "../../component/Values";
import FAQs from "../../component/FAQs";
import Testimonials from "../../component/Testimonials";

const Home = () => {
  return (
    <>
    <Header /> 
    <Programs />
    <Values />
    <FAQs />
    <Testimonials />
    
    </>
  );
};

export default Home;
