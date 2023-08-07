import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Electronics from "../Home/Electronics";
import HomeBottomCarousal from "../Home/HomeBottomCarousal";
import HomeCard from "../Home/HomeCard";
import HomePet from "../Home/HomePet";
import HomeTopCarousal from "../Home/HomeTopCarousal";
import Kid from "../Home/Kids";
import Men from "../Home/Men";
import Trending from "../Home/Trending";
import Women from "../Home/Women";

const Home = () => {
  return (
    <Box mt={"160px"}>
      <HomeTopCarousal />
      <HomeBottomCarousal />
      <Trending />
      <Men />
      <Women />
      <HomeCard />
      <Kid />
      <Electronics />
      <HomePet />
    </Box>
  );
};

export default Home;
