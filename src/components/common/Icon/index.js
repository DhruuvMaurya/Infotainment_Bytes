import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import "./styles.css";

const Icon = ({ src, link, name }) => {
  return (
    <Link to={link} target="_blank" rel="noopener noreferrer">
      <Box className="logo-wrapper">
        <Box component="img" src={src} alt={name} className="logo" />
      </Box>
    </Link>
  );
};

export default Icon;
