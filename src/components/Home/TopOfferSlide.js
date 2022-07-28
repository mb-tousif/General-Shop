import React from 'react';
import { Box, Typography, Divider, Button, styled, Grid  } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HistoryToggleOffIcon from "@mui/icons-material/HistoryToggleOff";
import Countdown from "react-countdown";

const TopOfferSlide = ({ topOffer, tittle }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const addURL = `https://rukminim1.flixcart.com/flap/400/400/image/633789f7def60050.jpg?q=70`;

  const Image = styled("img")({
    width: "auto",
    height: 150,
    borderRadius: 10,
    margin: 10,
  });
  const Component = styled(Box)`
  margin-top: 10,
  background: #ffffff
  `;
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
    <Component>
      <Box sx={{ padding: "15px 20px", display: "flex" }}>
        <Typography
          sx={{ fontSize: "22px", fontWeight: 600, color: "orangeRed" }}
        >
          {tittle}
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
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={10}>
            <Carousel
              responsive={responsive}
              swipeAble={false}
              draggable={false}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={2000}
              keyBoardControl={true}
              showDots={false}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
              containerClass="carousel-container"
              centerMode={true}
            >
              {topOffer.map((data) => (
                <Box textAlign="center" style={{ padding: "15px 20px" }}>
                  <Image src={data.url} alt="Banner" key={data.id} />
                  <Typography
                    style={{ color: "#8d0b93", marginTop: 5, fontSize: 14 }}
                  >
                    {data.title.shortTitle}
                  </Typography>
                  <Typography
                    style={{ color: "#ff057c", marginTop: 5, fontSize: 12 }}
                  >
                    {data.discount}
                  </Typography>
                  <Button
                    style={{ color: "green", marginTop: 5, opacity: 0.6 }}
                    size="small"
                  >
                    {data.tagline}
                  </Button>
                </Box>
              ))}
            </Carousel>
          </Grid>
          <Grid item xs={2}>
            <img src={addURL} alt="Side Add" style={{width:"100%", height:"300px"}} />
          </Grid>
        </Grid>
      </Box>
    </Component>
  );
};

export default TopOfferSlide;