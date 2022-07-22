import React from 'react';
import { Box, Button, Typography } from "@mui/material";
import styled from '@emotion/styled';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
const CustomNavLink = () => {
    const CustomButton = styled(Button)`
      background: orange;
      color: green;
      margin-left: 10px;
    `
    const CustomBox = styled(Box)`
    display: flex;
    color: green;
    max-height: 40px;
    `
    const CustomTypography = styled(Typography)`
      margin-left: 5%;
      display: flex;
      font-size: 1.2rem;
      font-weight: bold;
      cursor: pointer;
    `;
    return (
      <Box style={{display: "flex"}}>
        <CustomButton variant="outlined" size="medium">Login</CustomButton>
        <CustomButton variant="outlined" size="medium">Become a Seller</CustomButton>
        <CustomBox>
            <CustomTypography>More <KeyboardArrowDownIcon/></CustomTypography>
            <CustomTypography><ShoppingBasketIcon/>&nbsp;Cart</CustomTypography>      
        </CustomBox>
      </Box>
    );
};

export default CustomNavLink;