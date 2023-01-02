import { Box, Grid, Typography, styled, Button } from '@mui/material';
import React from 'react';
import { useSelector } from "react-redux";
import EmptyCart from './EmptyCart';
import FashionCartItems from './FashionCartItems';
import TotalCartBalance from './TotalCartBalance';

const Container = styled(Grid)`
  padding : 30px 135px;
  background: #ffffff;
  border-radius: 20px;
`
const Header = styled(Box)`
  padding : 15px 24px;
`
const BtnWraper = styled(Box)`
  padding: 16px 22px;
  // box-shadow: 0 -2px 10px 0 rgb(0 0 0 /0.6);
  background: #fff;
  border-top: 5px solid #f0f0f0;
  `;
  
  const CustomBtn = styled(Button)`
  background: linear-gradient(225deg, #753a88 30%, #8e0b93 50%, #cc2b5e 100%);
  display: flex;
  margin-left: auto;
  color: #fff;
  width: 30%;
  height: 51px;
  border-radius: 5px;
`

const Cart = () => {
    const { CartItems } =
      useSelector((state) => state.addToCartFashion) 
      // const {CartItems} = useSelector((state) => state.addToCartFashion || state.addToCartFurniture || state.addToCartTopOffer);
      // console.log(CartItems);
    return (
      <Box sx={{ background: "#f2f2f2", padding: "20px" }}>
        {CartItems.length ? (
          <Grid container spacing={2}>
            <Container items lg={9} md={9} sm={12} xs={12}>
              <Header>
                <Typography>My Cart ({CartItems.length})</Typography>
              </Header>
              {CartItems.map((item) => (
                <FashionCartItems item={item} key={item.key} />
              ))}
              <BtnWraper>
                <CustomBtn>Place Order</CustomBtn>
              </BtnWraper>
            </Container>
            <Container items lg={3} md={3} sm={12} xs={12}>
              <TotalCartBalance items CartItems={CartItems} />
            </Container>
          </Grid>
        ) : (
          <Grid><EmptyCart/></Grid>
        )}
      </Box>
    );
};

export default Cart;