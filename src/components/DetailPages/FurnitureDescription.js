import React from "react";
import {Box, Typography, Table, TableBody, TableRow, TableCell, styled} from "@mui/material";
import Assured from "../../Assets/images/Assured.png";
import { MdLocalOffer } from "react-icons/md";
const SmallText = styled(Box)`
  font-size: 14px;
  vertical-align:baseline & > p {
    font-size: 14px;
    margin-top: 10px;
  }
`;
const StyledBadge = styled(MdLocalOffer)`
  margin-right: 10px;
  color: #00cc00;
  font-size: 15px;
`;

const ColumnText = styled(TableRow)`
  font-size: 14px;
  vertical-align: baseline;
  & > td {
    font-size: 14px;
    margin-top: 10px;
  }
`;

const FurnitureDescription = ({furniture}) => {
  const adURL =
    "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";
  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);
  return (
    <>
      <Typography>{furniture.title.longTitle}</Typography>
      <Typography
        style={{ marginTop: "5px", color: "#878787", fontSize: "14px" }}
      >
        8 ratings & 1 review
        <Box component="span">
          <img
            src={Assured}
            style={{ width: "77px", marginLeft: "20px" }}
            alt=""
          />
        </Box>
      </Typography>
      <Typography style={{ display: "flex", alignItems: "center" }}>
        <Box component="span" style={{ fontSize: 28 }}>
          &#2547;{furniture.price.cost} &nbsp;&nbsp;&nbsp;
        </Box>
        <Box component="span" style={{ color: "#878787" }}>
          <strike>&#2547;{furniture.price.mrp}</strike>
        </Box>
        &nbsp;&nbsp;&nbsp;
        <Box component="span" style={{ color: "green" }}>
          {furniture.price.discount}
        </Box>
      </Typography>
      <SmallText>
        <Typography style={{ display: "flex", alignItems: "center" }}>
          <StyledBadge />
          Get extra 20% off upto &#2547;50 on 1 item(s)
        </Typography>
        <Typography style={{ display: "flex", alignItems: "center" }}>
          <StyledBadge />
          Get extra 13% off (price inclusive of discount)
        </Typography>
        <Typography style={{ display: "flex", alignItems: "center" }}>
          <StyledBadge />
          Sign up for General pay later and get General gift card
        </Typography>
        <Typography style={{ display: "flex", alignItems: "center" }}>
          <StyledBadge />
          Buy 2 items save 5%, buy 3 or more save 10%
        </Typography>
      </SmallText>
      <Table>
        <TableBody>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Delivery</TableCell>
            <TableCell style={{ fontWeight: 600 }}>
              Delivery by {date.toDateString()} | &#2547;40
            </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Warranty</TableCell>
            <TableCell>No Warranty</TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Seller</TableCell>
            <TableCell>
              <span style={{ color: "#2874f0" }}>SuperComNet</span>
              <Typography>GST invoice available</Typography>
              <Typography>
                View more sellers starting from &#2547;329
              </Typography>
            </TableCell>
          </ColumnText>
          <TableRow>
            <TableCell colSpan={2}>
              <img src={adURL} style={{ width: 390 }} alt="Certified" />
            </TableCell>
          </TableRow>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Description</TableCell>
            <TableCell>{furniture.description}</TableCell>
          </ColumnText>
        </TableBody>
      </Table>
    </>
  );
};


export default FurnitureDescription;