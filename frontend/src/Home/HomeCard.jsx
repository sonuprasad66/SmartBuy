import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import React from "react";

const HomeCard = () => {
  return (
    <SimpleGrid columns={[1, 2]} spacing={5} p={5}>
      <Box>
        <Image
          w={"full"}
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1676039397_N_NesGold_JioMart_Banner_600X350px_04-07-22_web.jpg"
        />
      </Box>
      <Box>
        <Image
          w={"full"}
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1673482906_campa.jpg"
        />
      </Box>
      <Box>
        <Image
          w={"full"}
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1673482782_600x350-Main_banner.jpg"
        />
      </Box>
      <Box>
        <Image
          w={"full"}
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1673439041_3.jpg"
        />
      </Box>
    </SimpleGrid>
  );
};

export default HomeCard;
