import React from 'react';
import { Box, Typography, styled, Button } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const TopOfferSlide = ({ topOffer }) => {
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
  return (
    <Component>
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
    </Component>
  );
};

export default TopOfferSlide;