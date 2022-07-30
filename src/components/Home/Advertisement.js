import React from 'react';
import { Box, styled } from "@mui/material";

const Advertisement = () => {
      const Image = styled("img")(({ theme }) => ({
        width: "100%",
        height: 220,
        borderRadius: 10,
        [theme.breakpoints.down("md")]: {
          objectFit: "cover",
          height: 120,
        },
      }));

      const teer = `https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D103692&q=best&v=1&m=700&webp=1`;

    return (
      <Box>
        <Image src={teer} alt="City group" />
      </Box>
    );
};

export default Advertisement;