import React, { useState,useEffect } from "react";
import {motion} from 'framer-motion';
import { AppBar, Avatar, Box, Typography,useMediaQuery,useTheme } from "@mui/material";
import {AiFillTwitterCircle,AiOutlineLinkedin,AiOutlineGithub,AiOutlineMail} from 'react-icons/ai'
import navIcon from '../assets/navimg.png';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const[showSocials,setShowSocials] = useState(false);
  const[rotateName,setRotateName] = useState(false);

  const [scrollY, setScrollY] = useState(0);
  const name = "Anirudh";
  const letterVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 0, transition: { duration: 0.5 } },
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (window.scrollY > 40 && window.scrollY < 1500) {
        setShowSocials(true);
        setRotateName(false)
      } else if  (window.scrollY >= 1500 && window.scrollY < 7600) {
        setShowSocials(false);
        setRotateName(true)
      }else{
        setShowSocials(false);
        setRotateName(false)
      }
  if(!isMobile){
    if(window.scrollY>=5200 ){
    setRotateName(false)
  }
  if(window.scrollY>=6200){
    setRotateName(false)
}
  }

  if(isMobile){
    if(window.scrollY>=6000){
      setRotateName(false)
    }
  }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
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
        left:isMobile ? -20 : 0,
        color: "#000",
        cursor:'pointer',
        boxShadow:'none',
        zIndex:isMobile?10:""
      }}
    >
      <Box sx={{display:'flex',alignItems:'center',boxShadow:'none'}}>
        <Avatar src={navIcon} sx={{
        width: '50px',
        height: '50px',
      }}/>
      <Typography color='#f3f3f3' fontFamily="Montserrat" fontWeight="600" variant="h5" style={{transform:rotateName?"rotate(90deg)":"none",position:rotateName?"fixed":"sticky",top:rotateName?"125px":"10px",left:rotateName? isMobile?"-35px":"-15px":"10px",transition:"0.5s transform ease"}}>
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
        <a target="_blank" href="https://twitter.com/aspiringDev22">
        <AiFillTwitterCircle color="white" size={40} style={{marginBottom:'10px'}}/>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/anirudhs22">
        <AiOutlineLinkedin color="white" size={40} style={{marginBottom:'10px'}}/>
        </a>
        <a target="_blank" href="https://github.com/aspiringDev22">
        <AiOutlineGithub color="white" size={40} style={{marginBottom:'10px'}}/>
        </a>
        <a target="_blank" href="mailto:anirudhs00.22@gmail.com">
        <AiOutlineMail color="white" size={40} style={{marginBottom:'10px'}}/>
        </a>
      </Box>
      </motion.div>
    </AppBar>
  );
};

export default Navbar;
