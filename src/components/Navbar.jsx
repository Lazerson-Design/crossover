import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav style={navbarStyles}>
        <div style={containerStyles}>
          <div style={navTableStyles}>
            <a href="index.html" style={logoStyles}>
              {/*  <img
                src="https://runwebrun.com/snow-light/assets/images/logo-light.svg"
                alt="logo-light"
                width="85"
              /> */}
              <img
                src="https://runwebrun.com/snow-light/assets/images/logo.svg"
                alt="logo-dark"
                width="85"
              />
            </a>
            <ul style={navListStyles}>
              <li style={navItemStyles}>
                <a href="#about" style={linkStyles}>
                  About
                </a>
              </li>
              <li style={navItemStyles}>
                <a href="#contact" style={linkStyles}>
                  Contact
                </a>
              </li>
              <li style={navItemStyles}>
                <a href="#portfolio" style={linkStyles}>
                  Portfolio
                </a>
              </li>
              <li style={navItemStyles}>
                <a href="#blog" style={linkStyles}>
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

// Basic Inline Styles for the Navbar
const navbarStyles = {
  position: "fixed",
  padding: "20px 0",
  fontSize: ".96rem",
  left: 0,
  top: 0,
  right: 0,
  zIndex: 1000,
  fontFamily: "'Arial', Work Sans, sans-serif",
  fontWeight: "bold",
  backgroundColor: "#fff",
  alignItems: "center",
  justifyContent: "space-between",
  display: "flex",
};

const containerStyles = {
  paddingRight: "15px",
  paddingLeft: "15px",
  marginLeft: 20,
  marginRight: 20,
  maxWidth: "1140px", // Adjust width as needed
  width: "100%",
};

const navTableStyles = {
  display: "flex", // Flexbox to arrange logo and nav list
  width: "100%",
  alignItems: "center",
  justifyContent: "space-between",
};

const logoStyles = {
  cursor: "pointer",
  width: "85px",
  borderStyle: "none",
  boxSizing: "inherit",
  overflow: "clip",
  overflowClipMargin: "content-box",
};

const navListStyles = {
  listStyle: "none",
  display: "flex",
  gap: "2rem",
  margin: 0,
  padding: 0,
};

const navItemStyles = {
  margin: 0,
};

const linkStyles = {
  textDecoration: "none",
  color: "black",
  fontSize: "1rem",
};

export default Navbar;
