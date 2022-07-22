import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { bannerData } from "../StaticData/data";

const HomeBanner = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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

  return (
    <Carousel
      responsive={responsive}
      swipeable={false}
      draggable={false}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      containerClass="carousel-container"
    >
      {bannerData.map((data) => (
        <img src={data.url} sx={{ width: "100%" }} alt="Banner" key={data.id} />
      ))}
    </Carousel>
  );
};

export default HomeBanner;

