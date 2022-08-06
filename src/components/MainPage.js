import React from "react";
import About from "./About";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Portfolio from "./Portfolio/Portfolio";
import Skills from "./Skills";

const MainPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <ContactUs />
      <Footer />
    </>
  );
};

export default MainPage;
