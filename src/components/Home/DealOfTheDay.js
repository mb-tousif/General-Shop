import React, { Fragment } from 'react';
import HistoryToggleOffIcon from "@mui/icons-material/HistoryToggleOff";
import Countdown from "react-countdown";
import { Box, Button, Divider, Typography, styled } from "@mui/material";

const DealOfTheDay = () => {
    const renderer = ({ hours, minutes, seconds }) => {
      return (
        <Box variant="span">
          {hours}:{minutes}:{seconds} Left
        </Box>
      );
    };
    const CustomButton = styled(Button)`
      background: orange;
      color: green;
      margin-left: auto;
      font-weight: 600;
    `;
    return (
      <Fragment>
        <Box sx={{ padding: "15px 20px", display: "flex" }}>
          <Typography
            sx={{ fontSize: "22px", fontWeight: 600, color: "orangeRed" }}
          >
            Deal Of the Day
          </Typography>
          <Box sx={{ padding: "8px", display: "flex", color: "#8d0b93" }}>
            <HistoryToggleOffIcon />
            <Box sx={{ marginLeft: "10px", color: "#367587" }}>
              <Countdown date={Date.now() + 5.04e7} renderer={renderer} />
            </Box>
          </Box>
          <CustomButton variant="outlined" size="medium">
            View All
          </CustomButton>
        </Box>
        <Divider />
      </Fragment>
    );
};

export default DealOfTheDay;