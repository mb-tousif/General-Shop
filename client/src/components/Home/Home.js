import { Box } from '@mui/material';
import React from 'react';
import HomeBanner from './HomeBanner';
import TopNav from './TopNav';

const Home = () => {
    return (
        <Box>
            <TopNav/>
            <HomeBanner/>
        </Box>
    );
};

export default Home;