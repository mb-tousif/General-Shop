import React, { Fragment } from 'react';
import { Box, Grid} from "@mui/material";
import { paymentBanner } from "../StaticData/data";

const PaymentBannerSlide = () => {
    
    return (
      <Fragment>
        <Box container lg={12} md={12} sm={12} xs={12} display={"flex"}>
          {paymentBanner.map((data) => (
            <Grid lg={4} md={4} sm={12} xs={12}>
              <img src={data.url} alt="Banner" width={"100%"} key={data.id} />
            </Grid>
          ))}
        </Box>
      </Fragment>
    );
};

export default PaymentBannerSlide;