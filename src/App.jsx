import React from "react";
import Footer from "./components/Footer";
import ContactForm from "./components/Contactform";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <ContactForm />
      <Footer />
    </div>
  );
}


export default App;
