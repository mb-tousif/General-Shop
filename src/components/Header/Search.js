import React from 'react';
import styled from '@emotion/styled';
import { Box, InputBase } from '@mui/material';
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";

const Search = () => {
    const SearchBox = styled(Box)`
      background: linear-gradient(to top, #dfe9f3 0%, white 100%);
      color: green;
      width: 38%;
      border-radius: 4px;
      margin-left: 10px;
      font-weight: bold;
      display: flex
    `;
    const CustomInputBase = styled(InputBase)`
      color: green;
      width: 100%;
      padding-left: 5%;
    `;

    return (
      <SearchBox>
        <CustomInputBase placeholder="Search your Products Brands and More" />
        <Box>
          <ContentPasteSearchIcon sx={{margin: 1,}}/>
        </Box>
      </SearchBox>
    );
};

export default Search;