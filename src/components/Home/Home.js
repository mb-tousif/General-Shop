import styled from '@emotion/styled';
import { Box } from '@mui/material';
import React, { Fragment, useEffect } from 'react';
import HomeBanner from './HomeBanner';
import TopNav from './TopNav';
import DealOfTheDay from './DealOfTheDay';
import { useDispatch, useSelector } from "react-redux";
import { getTopOffer } from '../../Redux/Action/topOfferAction.js';
import { getFashion } from "../../Redux/Action/fashionAction.js";
import { getFurniture } from "../../Redux/Action/furnitureAction.js";
import FashionSlide from './FashionSlide';
import FurnitureSlide from './FurnitureSlide';
import TopOfferSlide from './TopOfferSlide';

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
  const {fashion} = useSelector((state) => state.getFashion);
  // console.log(furniture);
  // console.log(topOffer);
  // console.log(fashion);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFashion());
    dispatch(getTopOffer());
    dispatch(getFurniture());
  }, [dispatch]);
 

  return (
    <Fragment>
      <TopNav />
      <CustomBannerBG>
        <HomeBanner />
      </CustomBannerBG>
      <DealOfTheDay />
      <TopOfferSlide topOffer={topOffer} />
      <FashionSlide fashion={fashion} />
      <FurnitureSlide furniture={furniture} />
    </Fragment>
  );
};

export default Home;