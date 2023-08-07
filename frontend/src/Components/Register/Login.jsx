import React, { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  InputRightElement,
  InputGroup,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { Link as BrowseLink, useNavigate } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, userLogin } from "../../Redux/Auth/action";
import { getWishListData } from "../../Redux/WaitList/action";
import { getCartData } from "../../Redux/Cart/cart.action";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const isLoading = useSelector((state) => state.AuthReducer.isLoading);



  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userLogin(loginData)).then((res) => {
      if (res.payload.message === "Login successful") {
        localStorage.setItem("token", res.payload.token);
        toast({
          title: res.payload.message,
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
        dispatch(getWishListData(res.payload.token));
        dispatch(getCartData(res.payload.token));
        dispatch(getProfile(res.payload.token));
        setTimeout(() => {
          navigate("/");
        }, 1500);
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
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool <Link color={"blue.400"}>features</Link>
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
                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
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
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  >
                    <Checkbox>Remember me</Checkbox>
                    <Link color={"blue.400"}>
                      <BrowseLink to={"/forgetpassword"}>
                        Forget Password?
                      </BrowseLink>
                    </Link>
                  </Stack>
                  <Button
                    fontSize={{ base: "lg", md: "lg", lg: "xl", xl: "xl" }}
                    p={{ base: "1rem 1rem", lg: "1rem 2rem", xl: "1rem 2rem" }}
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
                      "LOG IN"
                    )}
                  </Button>
                </Stack>
                <Stack pt={6}>
                  <Text align={"center"}>
                    I don`t have account?{" "}
                    <Link color={"blue.400"}>
                      <BrowseLink to={"/signup"}>Sign Up</BrowseLink>
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
