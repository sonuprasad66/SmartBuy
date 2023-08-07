import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <Box w={"100%"} mt={50} bg={"#14244b"} p={"60px 100px"}>
        <SimpleGrid
          columns={[1, 2, 3, 4]}
          spacing="40px"
          borderBottom={"1px solid grey"}
          paddingBottom={"50px"}
        >
          <Box>
            <Heading color={"white"} fontSize={"20px"}>
              CUSTOMERS
            </Heading>
            <Text mt={3} color={"grey"}>
              Contact Us
            </Text>
            <Text mt={1} color={"grey"}>
              Track Order
            </Text>
            <Text mt={1} color={"grey"}>
              Return Order
            </Text>
            <Text mt={1} color={"grey"}>
              Cancel Order
            </Text>
          </Box>
          <Box>
            <Heading color={"white"} fontSize={"20px"}>
              COMPANY
            </Heading>
            <Text mt={5} color={"grey"}>
              About us
            </Text>
            <Text mt={1} color={"grey"}>
              We're Hiring
            </Text>
            <Text mt={1} color={"grey"}>
              Privacy Popcy
            </Text>
            <Text mt={1} color={"grey"}>
              Terms and Condition
            </Text>
          </Box>
          <Box>
            <Heading color={"white"} fontSize={"20px"}>
              CONTACTS
            </Heading>
            <Text
              mt={5}
              color={"white"}
              className="fa-solid fa-location-dot"
            ></Text>
            <Text mt={1} color={"grey"}>
              New Delhi, India
            </Text>
            {/* <Text mt={1} color={"grey"}>
              India
            </Text> */}
            <Text mt={1} color={"grey"}>
              +91 9999-999-999
            </Text>
            <Text mt={1} color={"grey"}>
              info@smartbuy.com
            </Text>
          </Box>
          <Box>
            <Heading color={"white"} fontSize={"20px"}>
              KEEP IN TOUCH
            </Heading>
            <Flex mt={3}>
              <input
                style={{
                  outline: "none",
                  border: "0px",
                  width: "250px",
                  heigth: "40px",
                  paddingLeft: "10px",
                }}
                placeholder="Your Email"
              />
              <Box
                justifyContent={"center"}
                alignItems={"center"}
                display={"flex"}
                w={"50px"}
                h={"40px"}
                color={"white"}
                bg={"#E94E1E"}
                cursor={"pointer"}
              >
                <ChevronRightIcon />
              </Box>
            </Flex>
            <Box mt={3}>
              <Heading color={"white"} fontSize={"20px"}>
                Follow Us
              </Heading>
              <Flex gap={3} mt={2}>
                <Link to={"/"}>
                  <Image
                    w={"40px"}
                    h={"40px"}
                    src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
                    alt="twitter"
                  />
                </Link>

                <Link to={"/"}>
                  <Image
                    w={"40px"}
                    h={"40px"}
                    src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                    alt="facebook"
                  />
                </Link>

                <Link to={"/"}>
                  <Image
                    w={"40px"}
                    h={"40px"}
                    src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png?20220706172052"
                    alt="instagram"
                  />
                </Link>

                <Link to={"/"}>
                  <Image
                    w={"40px"}
                    h={"40px"}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png?20220821125553"
                    alt="youtube"
                  />
                </Link>
              </Flex>
            </Box>
          </Box>
        </SimpleGrid>
        <Text color={"white"} textAlign={"right"} p={4}>
          © 2020 SmartBuy
        </Text>
      </Box>
    </>
  );
};
