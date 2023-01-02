import { Box, Typography, styled } from "@mui/material";
import React, { useEffect, useState } from 'react';

const Header = styled(Box)`
  padding: 15px 24px;
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
`;

const Heading = styled(Typography)`
  color: #878787;
`;

const Container = styled(Box)`
  padding: 15px 24px;
  background: #fff;
  & > p {
    margin-bottom: 20px;
    font-size: 14px;
  }
`;

const Price = styled(Typography)`
  float: right;
`;

const TotalAmount = styled(Typography)`
  font-size: 18px;
  font-weight: 600;
  border-top: 1px dashed #e0e0e0;
  padding: 20px 0;
  border-bottom: 1px dashed #e0e0e0;
`;

const Discount = styled(Typography)`
  font-size: 14px;
  color: green;
`;

const TotalCartBalance = ({CartItems}) => {
     const [price, setPrice] = useState(0);
     const [discount, setDiscount] = useState(0);

     useEffect(() => {
       totalAmount();
     }, [CartItems]);

     const totalAmount = () => {
       let price = 0,
         discount = 0;
    //    console.log(CartItems);
       CartItems?.map((item)=> {
         price += item.price.mrp;
         discount += item.price.mrp - item.price.cost;
       });
       setPrice(price);
       setDiscount(discount);
     };
    return (
      <Box>
        <Header>
          <Heading>Price Details!</Heading>
        </Header>
        <Container>
          <Typography>
            Price ({CartItems?.length} item)
            <Price>&#2547;{price}</Price>
          </Typography>
          <Typography>
            Discount -&#2547;{discount}
          </Typography>
          <Typography>
            Delivery Charges
            <Price>&#2547;40</Price>
          </Typography>
          <TotalAmount>
            Total Amount
            <Price>&#2547;{price - discount + 40}</Price>
          </TotalAmount>
          <Discount>
            You will save &#2547;{discount - 40} on this order
          </Discount>
        </Container>
      </Box>
    );
};

export default TotalCartBalance;