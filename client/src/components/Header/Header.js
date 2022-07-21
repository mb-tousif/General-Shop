import React from "react";
import { AppBar, Box, Stack, Toolbar, Typography } from "@mui/material";
import InsightsIcon from "@mui/icons-material/Insights";
import logo from "../../Assets/images/logoText.png";
import Search from "./Search";
const Header = () => {
  return (
    <AppBar
      sx={{
        height: "55px",
        background: "linear-gradient(120deg, #09203f 0%, #537895 100%)",
      }}
    >
      <Toolbar>
        <Stack style={{ marginLeft: "12%", lineHeight: 0 }}>
          <img src={logo} alt="Logo" style={{ width: 150 }} />
          <Typography
            style={{ fontSize: 12, fontStyle: "italic", marginLeft: 20 }}
          >
            <Box component={"span"} style={{ color: "turquoise" }}>
              Explore
            </Box>
            <Box component={"span"} style={{ color: "green" }}>
              Plus
            </Box>
            <InsightsIcon style={{ fontSize: 12, color: "orange" }} />
          </Typography>
        </Stack>
        <Search/>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
