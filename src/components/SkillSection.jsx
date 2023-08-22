import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Popover,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTransform, useScroll, motion, useAnimation } from "framer-motion";

const useStyles = makeStyles({
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
    cursor: "pointer",
  },
});

const colors = [
  "#FFFFE0",
  "#AFEEEE",
  "#B0E0E6",
  "#D8BFD8",
  "#FFDEAD",
  "#FAF0E6",
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

const SkillSection = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [color, setColor] = useState(colors[0]);
  const [skills] = useState(skillArr);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const skillsRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: skillsRef,
    offset: isMobile ? ["start", "center start"] : ["center", "center start"],
  });
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const translateX = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
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

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  return (
    <motion.div
      ref={skillsRef}
      style={{ rotateY, scale,translateX }}
      transition={{ duration: 0.5 }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={controls}
    >
      <Box marginTop="150px" display="flex" flexDirection="column">
        <Typography
          sx={{
            fontSize: isMobile ? "2.8rem" : "5.6rem",
            width: isMobile ? "50%" : "100%",
            alignSelf: "center",
            color: color,
            marginBottom: isMobile ? "1.4rem" : "0rem",
          }}
          className={classes.text}
        >
          {/* aria-owns={open ? 'mouse-over-popover':undefined} aria-haspopup="true" onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose} */}
          What Am I Good At <span style={{ color: color }}>?</span>
        </Typography>
        <Popover
          id="mouse-over-popover"
          sx={{
            pointerEvents: "none",
          }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "center",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <Typography
            sx={{
              p: 1,
              bgcolor: "black",
              color: "white",
              border: "1px solid #acacac",
              borderRadius: "2px",
            }}
          >
            Donot Try Dragging !
          </Typography>
        </Popover>

        <Box sx={{ overflow: "hidden" }}>
          {skills.map((skill, i) => (
            <motion.div
              drag
              dragConstraints={{ top: 0, bottom: 100, left: 0, right: 300 }}
              whileDrag={{ scale: 1.2 }}
              dragElastic={0.2}
              key={i}
            >
              <Typography
                className={classes.skiilsText}
                variant={isMobile ? "h3" : "h2"}
              >
                {skill}
              </Typography>
            </motion.div>
          ))}
        </Box>
      </Box>
    </motion.div>
  );
};

export default SkillSection;
