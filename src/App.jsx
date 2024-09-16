import React from "react";
import Footer from "./components/Footer";
import ContactForm from "./components/Contactform";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App" style={bodyStyle}>
      <Navbar />
      <Hero />
      <ContactForm />
      <Footer />
    </div>
  );
}

const bodyStyle = {
  margin: 0,
};

export default App;
