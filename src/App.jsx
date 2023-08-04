import { Box, useMediaQuery, useTheme } from "@mui/material";
import React, { useState, useEffect } from "react";
import HomeLoader from "./components/HomeLoader";
import Navbar from "./components/Navbar";
import homebg from "./assets/home.png";
import Home from "./components/Home";
import Projects from "./components/Projects";

const App = () => {
  const [showloader, setShowLoader] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const timer = setInterval(() => {
      setShowLoader(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {showloader ? (
        <HomeLoader />
      ) : (
        <Box
          sx={{
            backgroundImage: `url(${homebg})`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Navbar />
          <Box
            sx={{
              flex: 1,
              overflow: "hidden",
            }}
          >
            <Home />
            <Projects />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default App;
