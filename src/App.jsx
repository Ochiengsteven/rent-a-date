/* eslint-disable no-unused-vars */
import React from "react";
import Home from "./pages/home";
import Features from "./components/Features";
import Hero from "./pages/Hero";
import Banner from "./components/Banner";
import Footer from "./components/footer";
import Testimonials from "./components/testimonials";
import LoginPage from "./components/login";
import RegistrationPage from "./components/registration";
const App = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Banner />
      <Testimonials />
      <Footer />
      <LoginPage />
      <RegistrationPage />
    </div>
  );
};

export default App;
