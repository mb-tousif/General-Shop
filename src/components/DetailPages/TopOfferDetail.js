import { Box, Grid, styled } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {getTopOfferDetail} from '../../Redux/Action/topOfferAction'
import ActionTopOffer from "./ActionTopOffer";
import TopOfferDescription from "./TopOfferDescription";
const Component = styled(Box)`
  margin-top: 55px;
  background: #f2f2f2;
`;
const Container = styled(Grid)`
  background: #fff;
  display: flex;
`;
const RightContainer = styled(Grid)`
  margin-top: 50px;
  padding: 10px;
  & > p {
    display: flex;
    margin-top: 10px;
  }
`;

const TopOfferDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const {topOffer} = useSelector((state) => state.getTopOfferDetail)
  //* The useDispatch hook is used to dispatch an action while useSelector hook is used to get the state from the redux store.
  console.log(topOffer);
  useEffect(() => {
    if (topOffer && id !== topOffer._id) {
      dispatch(getTopOfferDetail(id));
    }
  }, [dispatch, id, topOffer]);
  return (
    <Component>
      {topOffer && Object.keys(topOffer).length && (
        <Container container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionTopOffer topOffer={topOffer} />
          </Grid>
          <RightContainer item lg={8} md={8} sm={8} xs={12}>
            <TopOfferDescription topOffer={topOffer}/>
          </RightContainer>
        </Container>
      )}
    </Component>
  );
};

export default TopOfferDetail;
