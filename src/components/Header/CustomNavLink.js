import React, { useContext, useState } from 'react';
import { Box, Button, Typography, styled, Badge } from "@mui/material";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import LoginModal from '../Login/LoginModal';
import { DataContext } from '../../ContextApi/DataProvider';
import Profile from './Profile';
import { useSelector } from 'react-redux';
const CustomNavLink = () => {
  const [open, setOpen] = useState(false);
  const { account, setAccount } = useContext(DataContext);
  const { CartItems } = useSelector((state) => state.addToCartFashion);
  const handleDialog = () =>{
    setOpen(true);
  }
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

    const Container = styled(Link)(({ theme }) => ({
      display: "flex",
      color: "inherit",
      textDecoration: "none",
      [theme.breakpoints.down("md")]: {
        display: "block",
      },
    }));

    return (
      <Box style={{ display: "flex" }}>
        {account ? (
          <Profile account={account} setAccount={setAccount} />
        ) : (
          <CustomButton
            variant="outlined"
            size="medium"
            onClick={() => handleDialog()}
          >
            Login
          </CustomButton>
        )}
        <CustomButton variant="outlined" size="medium">
          Become a Seller
        </CustomButton>
        <CustomBox>
          <CustomTypography>
            More <KeyboardArrowDownIcon />
          </CustomTypography>

          <Container to="/cart">
            <CustomTypography>
              <Badge
                style={{ marginTop: 2 }}
                badgeContent={CartItems?.length}
                color="success"
              >
                <ShoppingBasketIcon />
                &nbsp;Cart
              </Badge>
            </CustomTypography>
          </Container>
        </CustomBox>
        <LoginModal open={open} setOpen={setOpen} />
      </Box>
    );
};

export default CustomNavLink;