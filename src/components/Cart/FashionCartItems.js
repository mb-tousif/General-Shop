import { Box, Typography, styled } from '@mui/material';
import React from 'react';
import Assured from "../../Assets/images/Assured.png";

const Component = styled(Box)`
  border-top: 2px solid #f0f0f0;
  display: flex;
`;

const LeftComponent = styled(Box)`
  margin: 20px;
`;

const SmallText = styled(Box)`
  color: #878787;
  font-size: 14px;
  margin-top: 10px;
`;

const FashionCartItems = ({item}) => {
    return (
      <Component>
        <LeftComponent>
          <img src={item.url} alt="FashionProduct" />
        </LeftComponent>
        <Box>
          <Typography>{item.title.longTitle}</Typography>
          <SmallText>
            Seller: Retail Seller
            <img
              src={Assured}
              style={{ width: "50px", marginLeft: "20px" }}
              alt=""
            />
          </SmallText>
          <Typography style={{ display: "flex", alignItems: "center" }}>
            <Box component="span" style={{ fontSize: 28 }}>
              ₹{item.price.cost} &nbsp;&nbsp;&nbsp;
            </Box>
            <Box component="span" style={{ color: "#878787" }}>
              <strike>₹{item.price.mrp}</strike>
            </Box>
            &nbsp;&nbsp;&nbsp;
            <Box component="span" style={{ color: "green" }}>
              {item.price.discount}
            </Box>
          </Typography>
        </Box>
      </Component>
    );
};

export default FashionCartItems;