import React from 'react';
import { Box, Typography, Popper, Paper,useMediaQuery,useTheme } from '@mui/material';
import { Parallax } from 'react-parallax';
import { BsGithub, BsGlobe } from 'react-icons/bs';

const Project = ({ img, name, github, live }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <Parallax strength={100} bgImage={img}>
      <Box
        height={isMobile?"60vh":"90vh"}
        sx={{
          background: 'none',
          width: isMobile?"80vw":"80vw",
          padding: '10px',
          borderRadius: '4px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: '2rem',
          position:'relative',
        }}
      >
        <Typography
          color="whitesmoke"
          fontWeight="bold"
          variant="h4"
          alignSelf="flex-end"
          marginLeft="30px"
          style={{ background: '#1d1d1d', position: 'absolute', top: '10px', padding: '10px 30px' }}
          onMouseEnter={handleMouseEnter}
          // onMouseLeave={handleMouseLeave}
        >
          {name}
        </Typography>
        <Popper id={id} open={open} anchorEl={anchorEl} style={{transition:"all 0.3s ease"}}>
          <Paper elevation={3} style={{ padding: '15px',background:"#424242" }}>
            <a className='gitlive' href={github} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', marginRight: '30px',color:"#d3d3d3" }}>
              <BsGithub color="inherit" size={38} />
            </a>
            <a className='gitlive' href={live} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none',color:"#d3d3d3" }}>
              <BsGlobe color="inherit" size={38} />
            </a>
          </Paper>
        </Popper>
      </Box>
    </Parallax>
  );
};

export default Project;
