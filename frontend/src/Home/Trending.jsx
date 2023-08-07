import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const Trending = () => {
  return (
    <Box>
      <Text m={"2%"} mb={0} fontSize={"20px"} fontWeight="bold">
        {" "}
        Trending Brands
      </Text>
      <Flex gap={10} overflow="scroll" m={"2%"} my="1%" p={2}>
        <Image
          _hover={{
            transform: "scale(1.1)",
          }}
          maxH={"220px"}
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1675211326_Everteen_Desktop.jpg"
          alt="img1"
        />
        <Image
          _hover={{
            transform: "scale(1.1)",
          }}
          maxH={"220px"}
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1675241905_Cadbury_Desktop.jpg"
          alt="img2"
        />
        <Image
          _hover={{
            transform: "scale(1.1)",
          }}
          maxH={"220px"}
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1675254196_Red_Rose_Desktop.jpg"
          alt="img3"
        />
        <Image
          _hover={{
            transform: "scale(1.1)",
          }}
          maxH={"220px"}
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1675242377_Clovia_Desktop.jpg"
          alt="img4"
        />
        <Image
          _hover={{
            transform: "scale(1.1)",
          }}
          maxH={"220px"}
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1675242242_Greenfinity_Desktop.jpg"
          alt="img5"
        />
        <Image
          _hover={{
            transform: "scale(1.1)",
          }}
          maxH={"220px"}
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1675242588_Baggit_Lavie__Hidesign_Desktop.jpg"
          alt="img6"
        />
        <Image
          _hover={{
            transform: "scale(1.1)",
          }}
          maxH={"220px"}
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1675211103_Cello_Desktop.jpg"
          alt="img7"
        />

        <Image
          _hover={{
            transform: "scale(1.1)",
          }}
          maxH={"220px"}
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1675211164_Aryanveda_Desktop.jpg"
          alt="img9"
        />
      </Flex>
    </Box>
  );
};

export default Trending;
