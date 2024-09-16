import React from "react";
import "./Navbar.css";

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
              <li style={navItemStyles}>
                <a
                  href="https://themeforest.net/item/snow-minimal-clean-wordpress-portfolio-theme/19347252?ref=unvab"
                  style={linkStyles}
                >
                  WordPress Theme
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
  position: "absolute",
  padding: "33px 0",
  fontSize: ".96rem",
  left: 0,
  top: 0,
  right: 0,
  zIndex: 1000,
  fontFamily: "'Arial', Work Sans, sans-serif",
  fontWeight: "bold",
};

const containerStyles = {
  paddingRight: "15px",
  paddingLeft: "15px",
  marginLeft: "auto",
  marginRight: "auto",

  maxwidth: "100%",
};

const navTableStyles = {
  display: "table",
  hight: "100%",
  width: "100%",
};

const logoStyles = {
  cursor: "Pointer",
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
  paddingRight: "20px",
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
