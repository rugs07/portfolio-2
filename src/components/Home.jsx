import React, { useRef, useEffect, useState } from "react";
import { Box, Grid, Link, Typography, useMediaQuery,useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTransform, useScroll, motion, useAnimation } from "framer-motion";
import heroImg from "../assets/hero.png";


const useStyles = makeStyles({
  link: {
    position: "relative",
    overflow: "hidden",
    padding: "2px",
    cursor: "pointer",
    fontSize:'25px',
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
  text: {
    // color: "white",
    textTransform: "capitalize",
    textAlign: "center",
    fontFamily: "Source Sans Pro",
    fontWeight: "bold",
  },
  skiilsText: {
    color: "white",
    textAlign: "center",
    fontFamily: "Source Sans Pro",
    fontWeight: "bold",
    cursor:'pointer'
  },
});

const colors = [
  "#FFFFE0",
  "#AFEEEE",
  "#B0E0E6",
  "#D8BFD8",
  "#FFDEAD",
  "	#FAF0E6",
  "#FFF0F5",
];
const skillArr = [
  "HTML,",
  "CSS,",
  "NODE,",
  "REACT,",
  "JAVASCRIPT,",
  "TYPESCRIPT,",
  "EXPRESS.",
];

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [color, setColor] = useState(colors[0]);
  const [skills, setSkills] = useState(skillArr);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset:isMobile? ["start", "center start"] : ["center", "center start"],
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

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIdx = Math.floor(Math.random() * colors.length);
      setColor(colors[randomIdx]);
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleDragWarn=()=>{
    alert("Drag and Drop at your own")
  }

  return (
    <Box sx={{ overflowX: "hidden", minHeight: "100vh",paddingBottom:'60px',paddingTop:isMobile?"0rem":'0rem' }}>
      <motion.div
        ref={targetRef}
        style={{ translateX,scale }}
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
          <Box className="home-nav" marginTop="30px" display="flex" sx={{marginLeft:isMobile?"3rem":"0",zIndex:isMobile?10000:0}}>
            <Typography variant="h6" marginRight="40px">
              <Link underline="none" color="#fff" className={classes.link}>
                Projects
              </Link>
            </Typography>
            <Typography variant="h6">
              <Link underline="none" color="#fff" className={classes.link}>
                Contact Me
              </Link>
            </Typography>
          </Box>
          <Box
            className="home-wrapper"
            sx={{
              backgroundImage: `url(${heroImg})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width:isMobile?"93vw" :"80vw",
              padding:isMobile?"10px 5px":'0px',
              height:isMobile?"80vh": "400px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography color="#fff" width="90%" textAlign="left" sx={{fontSize:isMobile?'1.8rem':'2rem'}}>
              Hi, I am Anirudh, a Passionate Full-Stack Web Developer. I like
              building innovative and multiFunctioning sites, tools for the web.
              I like to implement solutions that are responsive and efficient
              which enhances user's experience.A great problem solver with a big
              appetite to learn and improve my skills continuosly.
            </Typography>
          </Box>
        </Grid>
      </motion.div>
 
      <Box marginTop="150px" display="flex" flexDirection="column">
        <Typography sx={{fontSize:isMobile?'2.8rem':'5.6rem',width:isMobile?"50%":"100%",alignSelf:"center",color:color,marginBottom:isMobile?"1.4rem":"0rem"}} className={classes.text}>
          What Am I Good At <span style={{ color: color }}>?</span>
        </Typography>
        <Box sx={{ overflow: "hidden" }}>
          {skills.map((skill) => (
            <motion.div
              drag
              dragConstraints={{ top: 0, bottom: 100, left: 0, right: 300 }}
              whileDrag={{ scale: 1.2 }}
              dragElastic={0.2}
              key={skill}
            >
              <Typography className={classes.skiilsText} variant={isMobile?"h3":"h2"}>
                {skill}
              </Typography>
            </motion.div>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
