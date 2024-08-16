/* eslint-disable no-unused-vars */
import React from "react";
import Home from "./pages/home";
import Features from "./components/Features";
import Hero from "./pages/Hero";
import Banner from "./components/Banner";
import Footer from "./components/footer";
import Testimonials from "./components/testimonials";
const App = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Banner />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
