import { Box, Typography } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import projects from "../projectsdata.js";
import Contact from "./Contact.jsx";
import Project from "./Project.jsx";
import blog1Img from '../assets/blog1.png'
import blog2Img from '../assets/blog2.png';
import blog3Img from '../assets/blog3.png';
import blog4Img from '../assets/blog4.png';


const blogs = [
  {
    id:0,
    img:blog1Img,
    link:"https://anirudhs22.hashnode.dev/all-about-events-in-javascript",
  },
  {
    id:1,
    img:blog2Img,
    link:"https://anirudhs22.hashnode.dev/var-vs-let-vs-const",
  },
  {
    id:2,
    img:blog3Img,
    link:"https://anirudhs22.hashnode.dev/callback-functions-in-javascript",
  },
  {
    id:0,
    img:blog4Img,
    link:"https://anirudhs22.hashnode.dev/javascript-important-questions1"
  }
]

const boxVariant = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  hidden: { opacity: 0, y: 100 },
};

const Projects = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const[blogData,setBlogData] = useState(blogs)


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
          width="90%"
        >
          {projects.map((p) => (
            <Project img={p.img} name={p.name}/>
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
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
        gap: "200px",
        minHeight:'100vh',
        padding:'5rem'
      }}
    >
      {blogData.map((blog, index) => (
        <Box
          key={index}
          height="200px"
          sx={{
            background: "none",
            maxWidth: "100%",
            padding: "10px",
            borderRadius: "4px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border:'2px solid #e3e3e3',
            height:'40vh',
            objectFit: "cover",
            boxShadow:"1px 8px 8px 0px rgba(200,200,200,0.75)"
          }}
        >
          <a href={blog.link} target="_blank">
          <img
            src={blog.img}
            alt={`Image ${index}`}
            style={{ height: "50vh",borderRadius:'5px',width:'100%',cursor:"pointer" }}
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
