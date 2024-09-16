import React from "react";

const HeroSection = () => {
  return (
    <section
      style={{
        margin: 0,
        position: "relative",
        height: "100vh",
        backgroundImage:
          "url('https://runwebrun.com/snow-light/assets/images/home-7.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Text on top of the image */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textAlign: "center",
        }}
      >
        <h2>New Branding Agency</h2>
        <h1>
          We are about to change the way
          <br /> you publish on the web
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
