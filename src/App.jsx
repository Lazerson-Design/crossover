import React from "react";
import Navbar from "../components/Navbar";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      {/* Integrate the Navbar */}
      <Navbar />

      {/* Other content/components in your app */}
      <main>
        <section id="about">
          <h1>About Us</h1>
          <p>This is the about section.</p>
        </section>

        <section id="contact">
          <h1>Contact Us</h1>
          <p>This is the contact section.</p>
        </section>

        <section id="portfolio">
          <h1>Our Portfolio</h1>
          <p>This is the portfolio section.</p>
        </section>

        <section id="blog">
          <h1>Our Blog</h1>
          <p>This is the blog section.</p>
        </section>
      </main>

      <footer>
        <p>Footer content goes here.</p>
      </footer>
    </div>
  );
};

export default App;
