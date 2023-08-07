import { Box } from "@chakra-ui/react";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HomeTopCarousal = () => {
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
          <img
            className="d-block w-100"
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1675480947_1_Banner_Desktop.jpg"
            alt="Second slide"
          />
        </div>
        <div>
          <img
            className="d-block w-100"
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1675865545_One_Plus_11_Pre_book_Banner_Desktop.jpg"
            alt="First slide"
          />
        </div>
        <div>
          {" "}
          <img
            className="d-block w-100"
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1675699892_desktopgadgetgiftinggala.jpg"
            alt="Third slide"
          />
        </div>
        <div>
          {" "}
          <img
            className="d-block w-100"
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1675865955_DaalnPulses_1680x320.jpg"
            alt="Third slide"
          />
        </div>
        <div>
          {" "}
          <img
            className="d-block w-100"
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1675794647_chocolate-banner_2_1680-x-320.jpg"
            alt="Third slide"
          />
        </div>
        <div>
          {" "}
          <img
            className="d-block w-100"
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1675794647_chocolate-banner_2_1680-x-320.jpg"
            alt="Third slide"
          />
        </div>
        <div>
          <img
            className="d-block w-100"
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1675958288_Valentines_Week_Offer_Laptops_Desktop.jpg"
            alt="Third slide"
          />
        </div>
        <div>
          <img
            className="d-block w-100"
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1675796673_HotFoodFest1680.jpg"
            alt="Third slide"
          />
        </div>
      </Carousel>
    </Box>
  );
};

export default HomeTopCarousal;
