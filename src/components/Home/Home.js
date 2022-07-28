import styled from '@emotion/styled';
import { Box } from '@mui/material';
import React, { Fragment, useEffect } from 'react';
import HomeBanner from './HomeBanner';
import { getFurniture } from "../../Redux/Action/furnitureAction.js";
import { useDispatch, useSelector } from "react-redux";
import TopNav from './TopNav';
import { getTopOffer } from '../../Redux/Action/topOfferAction.js';
import FurnitureSlide from './FurnitureSlide';

const CustomBannerBG = styled(Box)`
background-image: linear-gradient(to top, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%);
padding: 5px;
`
const Home = () => {
  //* The useDispatch hook is used to dispatch an action while useSelector hook is used to get the state from the redux store.
  // const getProducts = useSelector((state) => state.getProducts);
  // const {products}  = getProducts;
  const {furniture }= useSelector((state) => state.getFurniture);
  const {topOffer} = useSelector((state) => state.getTopOffer);
  console.log(furniture);
  console.log(topOffer);
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getFurniture());
    dispatch(getTopOffer());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getFurniture());
    // dispatch(getTopOffer());
  }, [dispatch]);

  return (
    <Fragment>
      <TopNav />
      <CustomBannerBG>
        <HomeBanner />
      </CustomBannerBG>
      <FurnitureSlide furniture={furniture} />
    </Fragment>
  );
};

export default Home;