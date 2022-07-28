import React from 'react';
import { styled } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { paymentBanner } from "../StaticData/data";

const PaymentBannerSlide = () => {
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

    const Image = styled("img")({
      width: "100%",
      height: 280,
      borderRadius: 10,
    });
    return (
      <Carousel
        responsive={responsive}
        swipeAble={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        slidesToSlide={1}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {paymentBanner.map((data) => (
          <Image src={data.url} alt="Banner" key={data.id} />
        ))}
      </Carousel>
    );
};

export default PaymentBannerSlide;