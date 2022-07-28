import React, { Fragment } from 'react';
import { Box, Grid, styled } from "@mui/material";
import { paymentBanner } from "../StaticData/data";

const PaymentBannerSlide = () => {
    const Image = styled("img")(({ theme }) => ({
      width: "100%",
      height: 280,
      borderRadius: 10,
      [theme.breakpoints.down("md")]: {
        objectFit: "cover",
        height: 120,
      },
    }));
    const teer = `https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D103692&q=best&v=1&m=700&webp=1`;
    return (
      <Fragment>
        <Box container lg={12} md={12} sm={12} xs={12} display={"flex"}>
          {paymentBanner.map((data) => (
            <Grid lg={4} md={4} sm={12} xs={12}>
              <img src={data.url} alt="Banner" width={"100%"} key={data.id} />
            </Grid>
          ))}
        </Box>
        <Image src={teer} alt="City group"/>
      </Fragment>
    );
};

export default PaymentBannerSlide;