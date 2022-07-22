import React from 'react';
import { Box, Typography } from '@mui/material';
import {navData} from '../StaticData/data';

const TopNav = () => {
    return (
      <Box sx={{ display: "flex", margin:"0 5% 0 5%", padding: "10px", justifyContent: "space-between"}}>
        {navData.map((data, index) => (
          <Box key={index}>
            <img src={data.url} alt="Product" style={{ borderRadius: "50%",justifyItems:"center", width: 64, background: "rgba(255, 5, 124,.3)" }} />
            <Typography sx={{textAlign:"center", fontSize: 14}}>{data.text}</Typography>
          </Box>
        ))}
      </Box>
    );
};

export default TopNav;