import React from 'react';
import { Box, styled, Typography } from '@mui/material';
import {navData} from '../StaticData/data';

const TopNav = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    margin: "0 5% 0 5%",
    padding: "10px",
    overflow: "overlay",
    [theme.breakpoints.down("md")]: {
      margin: 2,
      padding: 2,
    },
  }));
    return (
      <CustomBox sx={{ display: "flex", justifyContent: "space-between"}}>
        {navData.map((data, index) => (
          <Box key={index}>
            <img src={data.url} alt="Product" style={{ borderRadius: "50%",justifyItems:"center", width: 64, background: "rgba(255, 5, 124,.3)" }} />
            <Typography sx={{textAlign:"center", fontSize: 14}}>{data.text}</Typography>
          </Box>
        ))}
      </CustomBox>
    );
};

export default TopNav;