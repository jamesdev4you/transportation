import React from 'react';
import Box from '@mui/material/Box';
import Menu from './menu';
import Ferrari from '../assets/ferrari.jpg'

const home = () => {
  return (
    <Box sx={{width: '100%', height: '100vh', backgroundImage: `url(${Ferrari})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    }}>
        <Menu />
    </Box>
  )
}

export default home