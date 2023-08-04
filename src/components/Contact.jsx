import React from "react";
import { Box, TextField, Typography, Button } from "@mui/material";

const inputStyles = {
  backgroundColor: "transparent",
  color: "white",
fontWeight:'bold',
fontFamily:'Montserrat',
};

const Contact = () => {
  return (
    <Box>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          // backgroundColor: "#00324b",
          backgroundColor: "#2b4162",
          // borderTop:'1px solid #acacac',
backgroundImage: "linear-gradient(360deg, #12100e 20%, #434343 94%)",
paddingTop:"6rem"

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
          Contact Me
        </Typography>
        <Box
          sx={{
            width: "100%",
            padding: "80px 100px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h3"
            color="white"
            fontFamily="Source Sans Pro"
            fontWeight="bold"
            width="60%"
            paddingTop="40px"
          >
            Let's unlock together next level of possibilites 🚀
            <span style={{ display: "block" }}>REACH OUT!</span>
          </Typography>
          <Box width="40%" display="flex" flexDirection="column" gap="20px">
            <TextField
              id="standard-basic"
              label="Name"
              variant="standard"
              InputLabelProps={{
                style: { ...inputStyles },
              }}
              InputProps={{
                style: { color: 'white' },
              }}
            />
            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
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
              multiline
              rows={4}
              defaultValue="Type your message here..."
              variant="standard"
              InputLabelProps={{
                style: { color: "white" },
              }}
              InputProps={{
                style: { ...inputStyles },
              }}
            />
            <Button variant="contained" sx={{alignSelf:'start',background:'#171d39'}}>Send!</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
