import { Box, InputBase } from '@mui/material';
import React from 'react';

const Search = () => {
    return (
     <Box sx={{borderRadius: "2px", marginLeft:"10px"}}>
        <InputBase sx={{ background:"linear-gradient(to top, #0ba360 0%, #3cba92 100%)", paddingLeft: "20px"}} noWrap placeholder="Search your products brands and more"/>
     </Box>
    );
};

export default Search;