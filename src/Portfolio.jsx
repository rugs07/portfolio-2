import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HomeLoader from "./components/HomeLoader";
import Navbar from "./components/Navbar";
import homebg from "./assets/home.png";
import Home from "./components/Home";
import Projects from "./components/Projects";

const Portfolio = () => {
  const [showloader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowLoader(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <Box>
      {showloader ? (
        <HomeLoader />
      ) : (
        <Box
          sx={{
            backgroundImage: `url(${homebg})`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            minHeight: "100vh",
            position: "relative",
          }}
        >
          <Navbar />
          <Home />
          <Projects />
        </Box>
      )}
    </Box>
  );
};

export default Portfolio;
