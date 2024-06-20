import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Suspense, useEffect, useState } from "react";
const Project = React.lazy(()=>import("./Project.jsx"));
import projects from "../projectsdata.js";
import Contact from "./Contact.jsx";
import blog1Img from "../assets/csf.jpg";
import blog2Img from "../assets/blog2.png";
import blog3Img from "../assets/blog3.png";
import blog4Img from "../assets/blog4.png";

const blogs = [
  {
    id: 0,
    img: blog1Img,
    link: "https://rugwed37.hashnode.dev/elevate-your-tech-prep-essential-cs-fundamental-revision-notes",
  },
  {
    id: 1,
    img: blog2Img,
    link: "https://anirudhs22.hashnode.dev/var-vs-let-vs-const",
  },
  {
    id: 2,
    img: blog3Img,
    link: "https://anirudhs22.hashnode.dev/callback-functions-in-javascript",
  },
  {
    id: 0,
    img: blog4Img,
    link: "https://anirudhs22.hashnode.dev/javascript-important-questions1",
  },
];

const boxVariant = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  hidden: { opacity: 0, y: 100 },
};

const Projects = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const [projectData, setProjectData] = useState(projects);
  const [blogData, setBlogData] = useState(blogs);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
          padding: "30px 0px 50px 0px",
        }}
        id="projectBox"
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
            fontSize={isMobile ? "4.3rem" : "6rem"}
            color="white"
            textAlign="end"
            fontFamily="Source Sans Pro"
            fontWeight="bold"
            paddingRight={isMobile ? "65px" : "80px"}
            position="sticky"
            top="0px"
          >
            Projects
          </Typography>
        </motion.div>
        <Box
          display="flex"
          gap="140px"
          flexDirection="column"
          alignItems="center"
          margin={isMobile ? "90px 0px 40px 40px" : "90px 0px 40px 90px"}
          width="90%"
        >
          {projectData.map((p, i) => (
            <Suspense key={i}>
            <Project
              img={p.img}
              name={p.name}
              github={p.github}
              live={p.livesite}
            />
            </Suspense>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          minHeight: "100vh",
          width: "100%",
          paddingTop: "5rem",
          backgroundColor: "#000000",
          paddingBottom:isMobile?"7rem":"0rem",
          backgroundImage: "linear-gradient(180deg, #12100e 0%, #434343 74%)",
        }}
      >
        <Typography
          fontSize={isMobile ? "4.3rem" : "6rem"}
          color="white"
          textAlign="end"
          fontFamily="Source Sans Pro"
          fontWeight="bold"
          paddingRight={isMobile ? "115px" : "80px"}
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
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
            gap: "200px",
            minHeight: "100vh",
            padding:isMobile?"6rem 2.8rem" :"5rem",
          }}
        >
          {blogData.map((blog, index) => (
            <Box
              key={index}
              // height="200px"
              sx={{
                background: "none",
                maxWidth: "100%",
                padding: "10px",
                borderRadius: "4px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                border: "2px solid #e3e3e3",
                height:isMobile? "27vh":"40vh",
                objectFit: "cover",
                boxShadow: "1px 8px 8px 0px rgba(200,200,200,0.75)",
              }}
            >
              <a href={blog.link} target="_blank">
                <img
                  src={blog.img}
                  alt={`Image ${index}`}
                  style={{
                    height: isMobile?"33vh":"50vh",
                    borderRadius: "5px",
                    width:isMobile? "100%":"100%",
                    cursor: "pointer",
                    zIndex:isMobile?100000:""
                  }}
                />
              </a>
            </Box>
          ))}
        </Box>
      </Box>
      <Contact />
    </motion.div>
  );
};

export default Projects;
