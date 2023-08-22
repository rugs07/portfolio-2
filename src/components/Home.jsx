import React, { useRef, useEffect, useState, Suspense } from "react";
import {
  Box,
  Grid,
  Link,
  Popover,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTransform, useScroll, motion, useAnimation } from "framer-motion";
import SkillSection from "./SkillSection";
// const heroImg = React.lazy(()=>import( "../assets/hero.png"));

const useStyles = makeStyles({
  link: {
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
  },
  box: {
    display: "flex",
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
  const classes = useStyles();
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
              <Link underline="none" color="#fff" className={classes.link}>
                Projects
              </Link>
            </Typography>
            <Typography variant="h6" onClick={handleContactMeClick}>
              <Link underline="none" color="#fff" className={classes.link}>
                Contact Me
              </Link>
            </Typography>
          </Box>
          <Suspense>
            <Box
              className="home-wrapper"
              sx={{
                // backgroundImage: `url(${heroImg})`,
                // background: "linear-gradient(to right, #0ff027, #203a43, #2c5364)",
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
                Hi, I am Anirudh, a Passionate Full-Stack Web Developer. I like
                building innovative and multiFunctioning sites, tools for the
                web. I like to implement solutions that are responsive and
                efficient which enhances user's experience.A great problem
                solver with a big appetite to learn and improve my skills
                continuosly.
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
