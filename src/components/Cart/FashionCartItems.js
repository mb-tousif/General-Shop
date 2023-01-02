import { Box, Typography, styled, Button } from '@mui/material';
import React from 'react';
import Assured from "../../Assets/images/Assured.png";
import GroupedButton from './GroupedButton';
import { useDispatch } from "react-redux";
import { deleteCartFashion } from '../../Redux/Action/CartAction';

const Component = styled(Box)`
  border-top: 2px solid #ffffff;
  display: flex;
`;

const LeftComponent = styled(Box)`
  margin: 20px;
  display: flex;
  flex-direction: column;
`;

const SmallText = styled(Box)`
  color: #878787;
  font-size: 14px;
  margin-top: 10px;
`;

const RemoveBtn = styled(Button)`
  margin-top: 20px;
`

const FashionCartItems = ({item}) => {
 const dispatch = useDispatch();
 const removeItemFromCart = (id) => {
   dispatch(deleteCartFashion(id));
 };
    return (
      <Component>
        <LeftComponent>
          <img src={item.url} alt="FashionProduct" />
          <GroupedButton/>
        </LeftComponent>
        <Box sx={{ margin: "20px" }}>
          <Typography sx={{ textAlign: "center" }}>
            {item.title.longTitle}
          </Typography>
          <SmallText>
            Seller: Retail Seller
            <img
              src={Assured}
              style={{ width: "50px", marginLeft: "20px" }}
              alt="Assured"
            />
          </SmallText>
          <Typography
            style={{ display: "flex", alignItems: "center", margin: "20px 0" }}
          >
            <Box component="span" style={{ fontWeight: 600, fontSize: 18 }}>
              &#2547;{item.price.cost} &nbsp;&nbsp;&nbsp;
            </Box>
            <Box component="span" style={{ color: "#878787" }}>
              <strike>&#2547;{item.price.mrp}</strike>
            </Box>
            &nbsp;&nbsp;&nbsp;
            <Box component="span" style={{ color: "green" }}>
              {item.price.discount}
            </Box>
          </Typography>
          <RemoveBtn onClick={ () => removeItemFromCart(item._id) }>Remove</RemoveBtn>
        </Box>
      </Component>
    );
};

export default FashionCartItems;