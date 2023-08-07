import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HomeBottomCarousal = () => {
  return (
    <Box>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={2}
        infiniteLoop={true}
        showStatus={false}
        showArrows={false}
      >
        <div>
          {" "}
          <img
            className="d-block w-100"
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1675947202_Mumbai.jpg"
            alt="Second slide"
          />
        </div>
        <div>
          <img
            className="d-block w-100"
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1675919530_Web_Mumbai_PremiumFruits.jpg"
            alt="First slide"
          />
        </div>
      </Carousel>
    </Box>
  );
};

export default HomeBottomCarousal;
