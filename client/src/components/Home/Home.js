import styled from '@emotion/styled';
import { Box } from '@mui/material';
import React, { Fragment } from 'react';
import HomeBanner from './HomeBanner';
import TopNav from './TopNav';

const Home = () => {
    const CustomBannerBG = styled(Box)`
    background-image: linear-gradient(to top, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%);
    padding: 5px;
    `
    return (
      <Fragment>
        <TopNav />
        <CustomBannerBG>
          <HomeBanner />
        </CustomBannerBG>
      </Fragment>
    );
};

export default Home;