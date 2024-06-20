import React, { useRef, useEffect, useState, Suspense } from "react";
import {
  Box,
  Grid,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useTransform, useScroll, motion, useAnimation } from "framer-motion";
import SkillSection from "./SkillSection";
import { styled } from "@mui/system";

const LinkWithUnderline = styled(Link)({
  position: "relative",
  overflow: "hidden",
  padding: "2px",
  cursor: "pointer",
  fontSize: "25px",
  "&::after": {
    content: '""',
    position: "absolute",
    left: 0,
    bottom: 0,
    width: "100%",
    height: "2px",
    backgroundColor: "white",
    transform: "scaleX(0)",
    transition: "transform 0.2s",
  },
  "&:hover::after": {
    transform: "scaleX(1)",
  },
});

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: isMobile ? ["start", "center start"] : ["center", "center start"],
  });
  const translateX = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    });
  }, [controls]);

  const handleContactMeClick = () => {
    const contactBox = document.getElementById("contactBox");
    if (contactBox) {
      contactBox.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleProjectClick = () => {
    const projectBox = document.getElementById("projectBox");
    if (projectBox) {
      projectBox.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      sx={{ overflowX: "hidden", minHeight: "100vh", paddingBottom: "60px" }}
    >
      <motion.div
        ref={targetRef}
        style={{ translateX, scale }}
        transition={{ duration: 0.5 }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={controls}
      >
        <Grid
          className="home-container"
          sx={{
            Height: "120vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "80px",
          }}
        >
          <Box
            className="home-nav"
            marginTop="30px"
            display="flex"
            sx={{
              marginLeft: isMobile ? "3rem" : "0",
              zIndex: isMobile ? 10000 : 0,
            }}
          >
            <Typography
              variant="h6"
              marginRight="40px"
              onClick={handleProjectClick}
            >
              <LinkWithUnderline
                underline="none"
                color="#fff"
                onClick={handleProjectClick}
              >
                Projects
              </LinkWithUnderline>
            </Typography>
            <Typography variant="h6" onClick={handleContactMeClick}>
              <LinkWithUnderline
                underline="none"
                color="#fff"
                onClick={handleContactMeClick}
              >
                Contact Me
              </LinkWithUnderline>
            </Typography>
          </Box>
          <Suspense>
            <Box
              className="home-wrapper"
              sx={{
                border: "2px solid white",
                backgroundSize: "cover",
                borderRadius: "20px",
                backgroundRepeat: "no-repeat",
                width: isMobile ? "95vw" : "80vw",
                padding: isMobile ? "10px 5px" : "0px",
                minHeight: isMobile ? "80vh" : "70vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: isMobile ? "1%" : "4%",
              }}
            >
              <Typography
                color="#fff"
                width="90%"
                textAlign="left"
                sx={{ fontSize: isMobile ? "1.8rem" : "2.2rem" }}
              >
                Hello, I'm Rugwed, a full-stack web developer with passion. I
                enjoy creating unique, multipurpose websites and web tools. I
                enjoy putting into practice ideas that improve the user
                experience and are responsive and effective. A fantastic problem
                solver with a strong desire to learn new things and keep getting
                better at what I do.
              </Typography>
            </Box>
          </Suspense>
        </Grid>
      </motion.div>
      <SkillSection />
    </Box>
  );
};

export default Home;
