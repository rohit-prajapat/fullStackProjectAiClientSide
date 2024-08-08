import React, { useState, useEffect } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Navbar = () => {
  
  const [loggedIn, setLoggedIn] = useState(() => {
    // Initialize state with the token from localStorage
    return localStorage.getItem("accessToken") !== null;
  });

  const theme = useTheme();
  const navigate = useNavigate();

  // Check token presence on component mount
  useEffect(() => {
    const checkToken = () => {
      const token = localStorage.getItem("accessToken");
      setLoggedIn(token !== null);
    };

    // Check the token initially
    checkToken();

    // Optionally, you can add an event listener to update the state if the token changes
    window.addEventListener("storage", checkToken);

    // Cleanup
    return () => {
      window.removeEventListener("storage", checkToken);
    };
  }, []);

  // Handle logout
  const handleLogout = async () => {
    try {
      await axios.post("/api/v1/auth/logout");
      setLoggedIn(false);
      toast.success("Logged out successfully");
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Failed to logout");
    }
  };

  return (
    <Box
      width={"100%"}
      backgroundColor={theme.palette.background.alt}
      p="1rem 6%"
      textAlign={"center"}
      sx={{ boxShadow: 3, mb: 2 }}
    >
      <Typography variant="h1" color="primary" fontWeight="bold">
        AI GPT3 
      </Typography>
      {loggedIn ? (
        <>
          <NavLink to="/" style={{ padding: "0 1rem" }}>
            Home
          </NavLink>
          <NavLink to="/login" onClick={handleLogout} style={{ padding: "0 1rem" }}>
            Logout
          </NavLink>
        </>
      ) : (
        <>
          <NavLink to="/register" style={{ padding: "0 1rem" }}>
            Sign Up
          </NavLink>
          <NavLink to="/login" style={{ padding: "0 1rem" }}>
            Sign In
          </NavLink>
        </>
      )}
    
    </Box>
  );
};

export default Navbar;
