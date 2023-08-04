import { Box, Typography } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import projects from "../projectsdata.js";
import Contact from "./Contact.jsx";

const boxVariant = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  hidden: { opacity: 0, y: 100 },
};

const Projects = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className="box"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "#2b4162",
          backgroundImage: "linear-gradient(180deg, #2b4162 0%, #12100e 94%)",
          width: "100%",
          paddingBottom: "50px",
        }}
      >
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{
            duration: 1,
            type: "spring",
            damping: 20,
            stiffness: 200,
          }} 
        >
          <Typography
            variant="h1"
            color="white"
            textAlign="end"
            fontFamily="Source Sans Pro"
            fontWeight="bold"
            paddingRight="80px"
            position="sticky"
            top="0px"
          >
            Projects
          </Typography>
        </motion.div>
        <Box
          display="flex"
          gap="90px"
          flexDirection="column"
          alignItems="center"
          margin="90px 0px 40px 90px"
          width="70%"
        >
          {projects.map((p) => (
            <Box
              height="60vh"
              sx={{
                background: "none",
                width: "400px",
                padding: "10px",
                border: "6px solid whitesmoke",
                borderRadius: "4px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img src={p.img} alt="imges" style={{ height: "300px" }} />
              <Typography
                color="whitesmoke"
                fontWeight="bold"
                variant="h3"
                alignSelf="flex-end"
                marginLeft="30px"
              >
                {p.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          minHeight: "100vh",
          width: "100%",
          backgroundColor: "#000000",
          backgroundImage: "linear-gradient(180deg, #12100e 0%, #434343 74%)",
        }}
      >
        <Typography
          variant="h1"
          color="white"
          textAlign="end"
          fontFamily="Source Sans Pro"
          fontWeight="bold"
          paddingRight="80px"
          position="sticky"
          top="0px"
          sx={
            {
              // background:"#45c14e"
            }
          }
        >
          Blogs
        </Typography>
        <Box
          display="flex"
          gap="90px"
          flexDirection="column"
          alignItems="center"
          // margin="90px 0px 40px 90px"
          width="70%"
        >
          {projects.map((p) => (
            <Box
              height="60vh"
              sx={{
                background: "none",
                width: "400px",
                padding: "10px",
                border: "6px solid whitesmoke",
                borderRadius: "4px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img src={p.img} alt="imges" style={{ height: "300px" }} />
              <Typography
                color="whitesmoke"
                fontWeight="bold"
                variant="h3"
                alignSelf="flex-end"
                marginLeft="30px"
              >
                {p.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <Contact />
    </motion.div>
  );
};

export default Projects;
