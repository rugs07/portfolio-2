import React, { useState,useEffect } from "react";
import {motion} from 'framer-motion';
import { AppBar, Avatar, Box, Typography,useMediaQuery,useTheme } from "@mui/material";
import {AiFillTwitterCircle,AiOutlineLinkedin,AiOutlineGithub,AiOutlineMail} from 'react-icons/ai'
import navIcon from '../assets/navimg.png';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const[showSocials,setShowSocials] = useState(false);

  const [scrollY, setScrollY] = useState(0);
  const name = "Anirudh";
  const letterVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 0, transition: { duration: 0.5 } },
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (window.pageYOffset > 0) {
        setShowSocials(true);
      } else {
        setShowSocials(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const colors = [
    "#FFFFE0",
    "#AFEEEE",
    "#B0E0E6",
    "#D8BFD8",
    "#FFDEAD",
    "	#FAF0E6",
    "#FFF0F5",
  ];
  
  return (
    <AppBar
      sx={{
        margin:'20px',
        background:'transparent',
        maxWidth: isMobile?"70vw":"20vw",
        height: "14vh",
        position: "fixed",
        top: 0,
        left: 0,
        color: "#000",
        cursor:'pointer',
        boxShadow:'none',
        zIndex:isMobile?1000:""
      }}
    >
      <Box sx={{display:'flex',alignItems:'center',boxShadow:'none'}}>
        <Avatar src={navIcon} sx={{
        width: '50px',
        height: '50px',
      }}/>
      <Typography color='#f3f3f3' fontFamily="Montserrat" fontWeight="600" variant="h5">
      {name.split("").map((letter, index) => (
          <motion.span
            key={index}
            initial="hidden"
            animate={scrollY > index * 50 ? "hidden" : "visible"}
            variants={letterVariants}
            style={{ display: "inline-block", fontSize: "1.7rem" }}
          >
            {letter}
          </motion.span>
        ))}
      </Typography>
      </Box>
      <motion.div
       initial={{ x: -100,y:0 }}
       animate={{ x: showSocials ? 0 : -100 }}
       transition={{ duration: 0.3 }}
       style={{
         position: "fixed",
         top:isMobile?'9%' :'14%',
         left:isMobile?"2.2%": '1.2%',
         width:isMobile?"40vw":"20vw",
        //  height: "60px",
         zIndex: 1000,
       }}
      >
      <Box sx={{margin:'8px',display:"flex",flexDirection:'column',width:'20%'}}>
        <AiFillTwitterCircle color="white" size={40} style={{marginBottom:'10px'}}/>
        <AiOutlineLinkedin color="white" size={40} style={{marginBottom:'10px'}}/>
        <AiOutlineGithub color="white" size={40} style={{marginBottom:'10px'}}/>
        <AiOutlineMail color="white" size={40} style={{marginBottom:'10px'}}/>
      </Box>
      </motion.div>
    </AppBar>
  );
};

export default Navbar;
