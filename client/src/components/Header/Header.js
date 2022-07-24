import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import InsightsIcon from "@mui/icons-material/Insights";
import logo from "../../Assets/images/logoText.png";
import Search from "./Search";
import styled from "@emotion/styled";
import CustomNavLink from "./CustomNavLink";
const Header = () => {

  const CustomizedAppBar = styled(AppBar)`
    background: linear-gradient(225deg, #ff057c 30%, #8d0b93 50%, #321575 100%);
    height: 55px;
  `
  const Component = styled(Box)`
    margin-left: 12%;
    line-height: 0;
  `
  const CustomsText = styled(Typography)`
    line-height: 0;
    color: turquoise;
    font-size: 10px;
    font-style: italic;
    margin-left: 15px;
  `
  return (
    <CustomizedAppBar>
      <Toolbar style={{minHeight: 55}}>
        <Component>
          <img src={logo} alt="Logo" style={{ width: 120 }} />
          <Box>
            <CustomsText>
              Family Shop&nbsp;
              <Box component={"span"} style={{ color: "orange" }}>
                Plus
              </Box>
              <InsightsIcon style={{ color: "green", fontSize: 10, marginLeft: 4}} />
            </CustomsText>
          </Box>
        </Component>
        <Search/>
        <CustomNavLink/>
      </Toolbar>
    </CustomizedAppBar>
  );
};

export default Header;
