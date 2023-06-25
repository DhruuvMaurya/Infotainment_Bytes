import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { iconData, linkData } from "utils/data";
import Icon from "components/common/Icon";

const Header = ({ name, link }) => {
  return (
    <Box>
      <Box className="upper-header">
        <Box className="image-wrapper">
          <Link to="/">
            <Box
              component="img"
              src="assets/logo/header_logo.jpg"
              alt="infotainment_bytes"
              className="logo"
            />
          </Link>
        </Box>
        <Box className="icon-wrapper">
          {iconData?.map(({ name, src, link }) => (
            <Icon key={name} src={src} link={link} name={name} />
          ))}
        </Box>
      </Box>
      <Box className="lower-header">
        <Box className="link-wrapper">
          {linkData.map(({ name, link }) => (
            <Link key={name} className="nav-link" to={link}>
              {name}
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
