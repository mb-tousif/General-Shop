import { Box, Grid} from '@mui/material';
import { styled } from '@mui/system';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getFashionDetail } from '../../Redux/Action/fashionAction';
import ActionFashion from './ActionFashion';
import FashionDescription from './FashionDescription';
const Component = styled(Box)`
  margin-top: 55px;
  background: #f2f2f2;
`;
const Container = styled(Grid)`
  background: #fff;
  display: flex;
  flex: around;
`;
const RightContainer = styled(Grid)`
  margin-top: 50px;
  padding: 10px;
  & > p {
    display: flex;
    margin-top: 10px;
  }
`;

const FashionDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { fashion } = useSelector((state) => state.getFashionDetail);
  //* The useDispatch hook is used to dispatch an action while useSelector hook is used to get the state from the redux store.
  useEffect(() => {
    if (fashion && id !== fashion._id) {
      dispatch(getFashionDetail(id));
    }
  }, [dispatch,id,fashion]);
  // console.log(fashion);
  return (
    <Component>
      {fashion && Object.keys(fashion).length && (
        <Container container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionFashion fashion={fashion} />
          </Grid>
          <RightContainer item lg={8} md={8} sm={8} xs={12}>
            <FashionDescription margin="10px" fashion={fashion} key={fashion._id} />
          </RightContainer>
        </Container>
      )}
    </Component> 
  );
};;

export default FashionDetail;