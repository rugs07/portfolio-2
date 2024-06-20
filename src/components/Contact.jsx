import React from "react";
import { Box, Typography, useMediaQuery, useTheme, Button } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <Box 
      id="contactBox"
      sx={{
        minHeight: isMobile ? "95vh" : "100vh",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        backgroundColor: "#2b4162",
        backgroundImage: "linear-gradient(360deg, #12100e 20%, #434343 94%)",
        paddingTop: isMobile ? "4rem" : "6rem",
      }}
    >
      <Typography
        fontSize={isMobile ? "3.4rem" : "6rem"}
        color="white"
        textAlign={isMobile ? "start" : "end"}
        fontFamily="Source Sans Pro"
        fontWeight="bold"
        paddingRight={isMobile ? "0px" : "80px"}
        marginLeft={isMobile ? "2.4rem" : "0rem"}
        position="sticky"
        top="0px"
      >
        Contact Me
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-evenly",
          padding: isMobile ? "33px 30px" : "80px 40px",
          marginLeft: isMobile ? "14px" : "0px",
          gap: "30px",
        }}
      >
        <Typography
          fontSize={isMobile ? "2.0rem" : "9vh"}
          color="white"
          fontFamily="Source Sans Pro"
          fontWeight="bold"
          width={isMobile ? "100%" : "60%"}
          paddingTop={isMobile ? "0px" : "10px"}
        >
          {isMobile ? "Let's Discuss New Ideas Together 🚀" : "Let's unlock together next level of possibilities 🚀"}
          <span style={{ display: "block" }}>REACH OUT!</span>
        </Typography>
        <Typography
          fontSize={isMobile ? "1.6rem" : "2.4rem"}
          color="white"
          fontFamily="Source Sans Pro"
          fontWeight="bold"
          width={isMobile ? "80%" : "40%"}
          textAlign="center"
          paddingRight={isMobile ? "0px" : "70px"}
          marginTop="22px"
        >
          You can reach me at: <a href="mailto:tech.rugwed@gmail.com" style={{ color: "white", textDecoration: "underline" }}>tech.rugwed@gmail.com</a>
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: isMobile ? "flex-start" : "center",
          padding: isMobile ? "0 30px" : "0 70px",
          marginTop: "22px",
          marginBottom: "22px",
        }}
      >
        <Typography
          fontSize={isMobile ? "1.6rem" : "2.4rem"}
          color="white"
          fontFamily="Source Sans Pro"
          fontWeight="bold"
          textAlign="center"
        >
          Check out my profile: <a href="https://jingle.bio/rugwed/" style={{ color: "white", textDecoration: "underline" }}>https://jingle.bio/rugwed/</a>
        </Typography>
      </Box>
      {/* Scroll to Top Button */}
      <Box
        sx={{
          textAlign: "center",
          marginTop: "auto",
          marginBottom : "50px"
        }}
      >
        <Button variant="contained" color="primary" onClick={scrollToTop}>
          <ArrowUpwardIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default Contact;
