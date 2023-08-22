import React, { useRef, useState } from "react";
import { Box, TextField, Typography, Button, useMediaQuery,useTheme, Alert, Snackbar } from "@mui/material";
import emailjs from '@emailjs/browser';

const inputStyles = {
  backgroundColor: "transparent",
  color: "white",
  fontWeight: "bold",
  fontFamily: "Montserrat",
};

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const formRef = useRef();
  const [contactForm,setContactForm] = useState({
    name:"",
    email:"",
    message:"",
  })
const[isMailSent,setIsMailSent] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  

const handleSubmit=(e)=>{
  e.preventDefault();
    emailjs.sendForm('service_6twnqqa', 'template_140xfsw', formRef.current, 'mYJvl6wE9u6oSBMsz')
      .then((response) => {
      setIsMailSent(true);
      setTimeout(() => {
        setIsMailSent(false);
      }, 3000);
      setContactForm({
        name:"",
        email:"",
        message:""
      })
      }, (error) => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <>
    <Snackbar open={isMailSent} autoHideDuration={3000} onClose={!isMailSent}>
  <Alert severity="success" sx={{ width: '100%' }}>
    Message Sent Successfully!
  </Alert>
</Snackbar>
      <Box 
      id="contactBox"
        sx={{
          minHeight:isMobile?"95vh" : "100vh",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          backgroundColor: "#2b4162",
          backgroundImage: "linear-gradient(360deg, #12100e 20%, #434343 94%)",
          paddingTop:isMobile?"4rem":"6rem",
        }}
      >
        <Typography
          fontSize={isMobile ? "3.4rem" : "6rem"}
          color="white"
          textAlign={isMobile ? "start":"end"}
          fontFamily="Source Sans Pro"
          fontWeight="bold"
          paddingRight={isMobile ? "0px" : "80px"}
          marginLeft={isMobile ? "2.4rem" :"0rem"}
          position="sticky"
          top="0px"
        >
          Contact Me
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection:isMobile ? "column":"row",
            justifyContent: "space-evenly",
            padding:isMobile ? "33px 30px": "80px 40px",
            marginLeft: isMobile ? "14px" : "0px",
            gap:"30px"
          }}
        >
          <Typography
            fontSize={isMobile ? "2.0rem":"9vh"}
            color="white"
            fontFamily="Source Sans Pro"
            fontWeight="bold"
            width={isMobile ? "100%" : "60%"}
            paddingTop={isMobile ? "0px":"10px"}
          >
            {isMobile ? "Let's Discuss New Ideas Together 🚀" : "Let's unlock together next level of possibilites 🚀"}
            <span style={{ display: "block" }}>REACH OUT!</span>
          </Typography>
          <Box component="form" ref={formRef} onSubmit={handleSubmit} width={isMobile?"80%":"40%"} display="flex" flexDirection="column" gap="20px" marginTop={isMobile ?"22px":"0px"} paddingRight={isMobile ? "0px":"70px"}>
            <TextField
              id="standard-basic"
              label="Name"
              variant="standard"
              name="name"
              value={contactForm.name}
              onChange={handleInputChange}
              required
              InputLabelProps={{
                style: { ...inputStyles },
              }}
              InputProps={{
                style: { color: "white" },
              }}
            />
            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              name="email"
              required
              value={contactForm.email}
              onChange={handleInputChange}
              InputLabelProps={{
                style: { color: "white" },
              }}
              InputProps={{
                style: { ...inputStyles },
              }}
            />
            <TextField
              id="standard-multiline-static"
              label="Message"
              name="message"
              multiline
              required
              rows={4}
              value={contactForm.message}
              onChange={handleInputChange}
              placeholder="Type your message here..."
              variant="standard"
              InputLabelProps={{
                style: { color: "white" },
              }}
              InputProps={{
                style: { ...inputStyles },
              }}
            />
            <Button
              variant="contained"
              sx={{ alignSelf: "start", background: "#171d39" }}
              type="submit"
            >
              Send!
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
