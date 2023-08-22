import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useState, useEffect, Suspense } from "react";
const HomeLoader = React.lazy(() => import("./components/HomeLoader"));
const Navbar = React.lazy(() => import("./components/Navbar"));
const Home = React.lazy(() => import("./components/Home"));
const Projects = React.lazy(() => import("./components/Projects"));

const App = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [showHome, setShowHome] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setShowLoader(false);
      setShowHome(true); 
    }, 2000);

    return () => {
      clearTimeout(loaderTimeout);
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
      {showLoader ? (
        <Suspense>
          <HomeLoader />
        </Suspense>
      ) : showHome ? ( // Show Home component after 3 seconds
        <Box
          sx={{
            // backgroundImage: `url(${homebg})`,
            background:
              "linear-gradient(to right, #0f2027, #0d1517, #0e1e25)",
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
            <Suspense>
              <Home />
              <Projects />
            </Suspense>
          </Box>
        </Box>
      ) : null}
    </Box>
  );
};

export default App;
