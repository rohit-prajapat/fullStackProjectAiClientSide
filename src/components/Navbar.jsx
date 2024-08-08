import { Box, Typography, useTheme } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Navbar = () => {
  
 


  return (
    <Box
      width={"100%"}
      // backgroundColor={theme.palette.background.alt}
      p="1rem 6%"
      textAlign={"center"}
      sx={{ boxShadow: 3, mb: 2 }}
    >
      <Typography variant="h1" color="primary" fontWeight="bold">
        AI GPT3 
      </Typography>
   
        <>
          <NavLink to="/" style={{ padding: "0 1rem" }}>
            Home
          </NavLink>
          <NavLink to="/login"  style={{ padding: "0 1rem" }}>
            Logout
          </NavLink>
        </>
      
        <>
          <NavLink to="/register" style={{ padding: "0 1rem" }}>
            Sign Up
          </NavLink>
          <NavLink to="/login" style={{ padding: "0 1rem" }}>
            Sign In.
          </NavLink>
        </>
      
    
    </Box>
  );
};

export default Navbar;
