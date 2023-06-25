import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Header = () => {
  return (
    <Box>
      <Box className="upper-header">
        <Box className="image-wrapper">
          <Box
            component="img"
            src="assets/logo/header_logo.jpg"
            alt="infotainment_bytes"
            className="logo"
          />
        </Box>
        <Box>Button</Box>
      </Box>
      <Box className="lower-header">
        <Box className="link-wrapper">
          <Link className="nav-link" to="/about-us">
            About us
          </Link>
          <Link className="nav-link" to="/category">
            Category
          </Link>
          <Link className="nav-link" to="/collaborations">
            Collaborations
          </Link>
          <Link className="nav-link" to="/suggestions">
            Suggestions
          </Link>
          <Link className="nav-link" to="/support-us">
            Support us
          </Link>
          <Link className="nav-link" to="/contact-us">
            Contact Us
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
