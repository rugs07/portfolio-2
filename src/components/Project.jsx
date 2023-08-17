import React from 'react';
import { Box, Typography } from '@mui/material';
import { Parallax } from 'react-parallax';

const Project = ({ img, name }) => {
  return (
    <Parallax strength={100} bgImage={img}>
      <Box
        height="90vh"
        sx={{
          background: "none",
          width: "80vw",
          padding: "10px",
          borderRadius: "4px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "2rem",
        }}
      >
        <Typography
          color="whitesmoke"
          fontWeight="bold"
          variant="h3"
          alignSelf="flex-end"
          marginLeft="30px"
        >
          {name}
        </Typography>
      </Box>
    </Parallax>
  );
}

export default Project;
