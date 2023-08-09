import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";


const Portfolio = () => {

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
