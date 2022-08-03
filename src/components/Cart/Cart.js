import { Box, Grid, Typography, styled } from '@mui/material';
import React, { Fragment } from 'react';
import { useSelector } from "react-redux";
import FashionCartItems from './FashionCartItems';
import TotalCartBalance from './TotalCartBalance';

const Container = styled(Grid)`
    padding : 30px 135px;
    `
    const Header = styled(Box)`
    padding : 15px 24px;

`

const Cart = () => {
    const { CartItems } =
      useSelector((state) => state.addToCartFashion) 
      // const {CartItems} = useSelector((state) => state.addToCartFashion || state.addToCartFurniture || state.addToCartTopOffer);
      console.log(CartItems);
    return (
      <Fragment>
        {CartItems.length ? (
          <Container container>
            <Grid items lg={9} md={9} sm={12} xs={12}>
                <Header>
                    <Typography>My Cart ({CartItems.length})</Typography>
                </Header>
                {
                    CartItems.map(item=>(
                        <FashionCartItems item={item} key={item.key}/>
                    ))
                }
            </Grid>
            <Grid items lg={3} md={3} sm={12} xs={12}>
                <TotalCartBalance/>
            </Grid>
          </Container>
        ) : (
          <Grid>EMpTY</Grid>
        )}
      </Fragment>
    );
};

export default Cart;