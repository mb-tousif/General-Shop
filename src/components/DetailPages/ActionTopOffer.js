import React, { useState } from "react";
import { Box, Button, styled } from "@mui/material";
import { ShoppingCart as Cart, FlashOn as Flash } from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCartTopOffer } from "../../Redux/Action/CartAction";
const LeftContainer = styled(Box)`
  min-width: 40%;
  padding: 40px 0 0 80px;
  overflow: hidden;
`;
const Image = styled("img")({
  padding: "15px",
  width: "80%",
});

const StyledButton = styled(Button)`
  width: 46%;
  border-radius: 2px;
  height: 50px;
  color: #fff;
`;

const ActionTopOffer = ({ topOffer }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { _id } = topOffer;
  const navigate = useNavigate();
  const addItemToCart = () => {
    dispatch(addToCartTopOffer(_id, quantity))
    navigate("/cart");
  };
  return (
    <LeftContainer>
      <Box
        style={{
          padding: "15px 20px",
          border: "1px solid #f0f0f0",
          width: "90%",
        }}
      >
        <Image src={topOffer.detailUrl} />
      </Box>
      <StyledButton
        variant="contained"
        style={{ marginRight: 10, background: "#ff9f00" }}
        onClick={() => addItemToCart()}
      >
        <Cart />
        Add to cart
      </StyledButton>
      <StyledButton variant="contained" style={{ background: "#fb641b" }}>
        <Flash />
        Buy Now
      </StyledButton>
    </LeftContainer>
  );
};

export default ActionTopOffer;
