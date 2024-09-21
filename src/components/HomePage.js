import React from "react";
import Header from "./HomePage/Header";
import Hero from "./HomePage/Hero";
import Features from "./HomePage/Features";
import Testimonials from "./HomePage/Testimonials";
import Footer from "./HomePage/Footer";
function HomePage() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default HomePage;
