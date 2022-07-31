import { Box, Grid, styled } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getFurnitureDetail } from "../../Redux/Action/furnitureAction";
import ActionFurniture from "./ActionFurniture";
import FurnitureDescription from "./FurnitureDescription";
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

const FurnitureDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { furniture } = useSelector((state) => state.getFurnitureDetail);
  //* The useDispatch hook is used to dispatch an action while useSelector hook is used to get the state from the redux store.
  useEffect(() => {
    if (furniture && id !== furniture._id) {
      dispatch(getFurnitureDetail(id));
    }
  }, [dispatch, id, furniture]);
  return (
    <Component>
      {furniture && Object.keys(furniture).length && (
        <Container container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionFurniture furniture={furniture} />
          </Grid>
          <RightContainer item lg={8} md={8} sm={8} xs={12}>
            <FurnitureDescription furniture={furniture} />
          </RightContainer>
        </Container>
      )}
    </Component>
  );
};

export default FurnitureDetail;
