import React, { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { Link as BrowseLink, useNavigate } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { userSignup } from "../../Redux/Auth/action";

export const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [SignupData, setSignupData] = useState({});
  const toast = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector((state) => state.AuthReducer.isLoading);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData({
      ...SignupData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userSignup(SignupData)).then((res) => {
      if (res.payload.message === "Signup Successfull") {
        toast({
          title: res.payload.message,
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
        navigate("/login");
      } else {
        toast({
          title: res.payload.message,
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      }
    });
  };

  return (
    <>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Sign up
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool <Link color={"blue.400"}>features</Link>{" "}
              ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <form onSubmit={handleSubmit}>
                <Flex
                  flexDirection={{
                    base: "column",
                    sm: "column",
                    lg: "row",
                    xl: "row",
                  }}
                  gap={5}
                >
                  <Box>
                    <FormControl id="fullname" isRequired>
                      <FormLabel>Full Name</FormLabel>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Enter Name"
                        onChange={handleChange}
                      />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="profile_pic">
                      <FormLabel>Profile_pic</FormLabel>
                      <Input
                        type="text"
                        name="profile_pic"
                        placeholder="Enter Profile URL"
                        onChange={handleChange}
                      />
                    </FormControl>
                  </Box>
                </Flex>
                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    onChange={handleChange}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Mobile Number</FormLabel>
                  <Input
                    type="number"
                    name="mobile_number"
                    placeholder="Enter Mobile Number"
                    onChange={handleChange}
                  />
                </FormControl>

                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Enter Password"
                      onChange={handleChange}
                    />
                    <InputRightElement h={"full"}>
                      <Button
                        variant={"ghost"}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }
                      >
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Stack spacing={10} pt={4}>
                  <Button
                    fontSize={{ base: "lg", md: "lg", lg: "xl", xl: "xl" }}
                    p={{ base: "1rem 1rem", lg: "1rem 2rem", xl: "1rem 2rem" }}
                    loadingText="Submitting"
                    size="lg"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                    type="submit"
                  >
                    {isLoading ? (
                      <Spinner
                        thickness="4px"
                        speed="0.65s"
                        emptyColor="gray.200"
                        color="blue.500"
                        size="md"
                      />
                    ) : (
                      "Sign up"
                    )}
                  </Button>
                </Stack>
                <Stack pt={6}>
                  <Text align={"center"}>
                    Already a user?{" "}
                    <Link color={"blue.400"}>
                      <BrowseLink to={"/login"}>Login</BrowseLink>
                    </Link>
                  </Text>
                </Stack>
              </form>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};
