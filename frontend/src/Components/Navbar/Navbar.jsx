import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorMode,
  Input,
  Heading,
  InputGroup,
  InputRightElement,
  MenuGroup,
  Text,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import { RiMoonClearLine } from "react-icons/ri";
import { MdOutlineWbSunny } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingCart, HiOutlineUser } from "react-icons/hi";
import { AiOutlinePoweroff } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { SubNavbar } from "./SubNavbar";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../Redux/Auth/action";
import SearchBar from "../SearchBar";
import { getCartData } from "../../Redux/Cart/cart.action";
import { getWishListData } from "../../Redux/WaitList/action";
export const Navbar = ({ handleSearch }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const token = localStorage.getItem("token");
  const [update, setUpdate] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUpdate(!update);
    navigate("/login");
  };
  const currentUser = useSelector((state) => state.AuthReducer.currentUser);
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);

  const cartData = useSelector((store) => store.cart.data);
  const wishlistData = useSelector((store) => store.wishlist.data);

  useEffect(() => {
    dispatch(getWishListData(token));
    dispatch(getCartData(token));
    dispatch(getProfile(token));
  }, [dispatch, update]);

  // api = "http://localhost:8080/products/search?q=women";

  const closeButton = () => {
    onclose();
  };

  const handleMyAccount = () => {
    alert("Your Account Details are comming soon!");
  };

  return (
    <>
      <Box
        top={0}
        w="100%"
        position="fixed"
        zIndex={500}
        h={"100px"}
        bg={colorMode === "light" ? "#14244B" : "#14244B"}
        color={"white"}
      >
        <Box
          h={"100%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-around"}
          w={["100%", "100%", "90%"]}
          m="auto"
          gap={5}
        >
          <Flex alignItems={"center"} justifyContent={"space-around"} gap={5}>
            <Flex
              visibility={["visible", "visible", "visible", "hidden"]}
              w="-webkit-fit-content"
              onClick={onOpen}
              cursor={"pointer"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              {" "}
              <GiHamburgerMenu
                onClick={onOpen}
                display={["flex", "none", "none", "none"]}
                size={35}
              />
            </Flex>
            <Link to={"/"}>
              <Heading size={["md", "md", "md", "xl"]}>SmartBuy</Heading>
            </Link>
          </Flex>
          <Box w={["30%", "40%"]}>
            <SearchBar onChange={(e) => handleSearch(e.target.value)} />
          </Box>
          <Box
            alignItems={"center"}
            justifyContent={"space-between"}
            gap={["20px", "30px"]}
            display="flex"
          >
            <Menu>
              {token ? (
                <MenuButton>
                  {" "}
                  <Flex alignItems={"center"} color="white" gap={2}>
                    <Avatar
                      display={{ base: "none", md: "flex" }}
                      size={"sm"}
                      src={
                        currentUser.profile_pic
                          ? `${currentUser.profile_pic}`
                          : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                      }
                    />
                    <Text
                      display={["none", "flex", "flex", "flex"]}
                      visibility={["hidden", "visible", "visible", "visible"]}
                      fontSize={"18px"}
                    >
                      {currentUser.name}
                    </Text>
                  </Flex>
                </MenuButton>
              ) : (
                <Link to={"/login"}>
                  <Flex alignItems={"center"} color="white">
                    <HiOutlineUser size={25} />
                    <Text fontSize={"18px"}>Login</Text>
                  </Flex>
                </Link>
              )}

              {token && (
                <MenuList color={colorMode === "light" ? "black" : "white"}>
                  <MenuGroup
                    title={currentUser.name}
                    display={["flex", "none", "none", "none"]}
                    visibility={["visible", "hidden", "hidden", "hidden"]}
                  ></MenuGroup>
                  <MenuItem>
                    <HiOutlineUser size={25} />

                    <Text ml={2} onClick={handleMyAccount}>
                      {" "}
                      My Account
                    </Text>
                  </MenuItem>
                  <MenuItem>
                    <BsHandbag size={25} />
                    <Link to={"/cart"}>
                      {" "}
                      <Text ml={2}> My Orders</Text>
                    </Link>
                  </MenuItem>

                  <MenuItem>
                    <AiOutlinePoweroff size={25} />
                    <Text ml={2} onClick={handleLogout}>
                      Log Out
                    </Text>
                  </MenuItem>
                </MenuList>
              )}
            </Menu>

            <Box position={"relative"}>
              <Link to="/wishlist">
                <FiHeart size={25} cursor="pointer" />
              </Link>
              {isAuth || token ? (
                <Flex
                  height="20px"
                  width="15px"
                  borderRadius="25px"
                  padding="5px"
                  backgroundColor="red"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  position="absolute"
                  top="-10px"
                  right="-8px"
                >
                  {wishlistData.length}
                </Flex>
              ) : (
                ""
              )}
            </Box>

            <Box position={"relative"}>
              <Link to="/cart">
                <HiOutlineShoppingCart size={25} cursor="pointer" />
              </Link>
              {isAuth || token ? (
                <Flex
                  height="20px"
                  width="15px"
                  borderRadius="25px"
                  padding="5px"
                  backgroundColor="red"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  position="absolute"
                  top="-10px"
                  right="-8px"
                >
                  {cartData.length}
                </Flex>
              ) : (
                ""
              )}
            </Box>

            <Box>
              {colorMode === "light" ? (
                <RiMoonClearLine
                  cursor={"pointer"}
                  size={25}
                  onClick={toggleColorMode}
                />
              ) : (
                <MdOutlineWbSunny
                  cursor={"pointer"}
                  size={25}
                  onClick={toggleColorMode}
                />
              )}
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        display={["none", "none", "none", "flex"]}
        visibility={["hidden", "visible", "visible", "visible"]}
      >
        <SubNavbar />
      </Box>

      <Drawer size={"lg"} placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            <Link to={"/"}>
              <Heading onClick={onclose}>UR SHOP</Heading>
            </Link>
          </DrawerHeader>
          <DrawerBody>
            <Flex
              gap={"10px"}
              flexDirection={"column"}
              justifyContent={"space-around"}
              m={"auto"}
            >
              <Link to={"/products"}>
                <Text onClick={onClose} fontWeight={"bold"} fontSize={"20px"}>
                  Products
                </Text>
              </Link>
              <Link to={"/mens"}>
                <Text onClick={onClose} fontWeight={"bold"} fontSize={"20px"}>
                  Men
                </Text>
              </Link>
              <Link to={"/womens"}>
                <Text fontWeight={"bold"} onClick={onClose} fontSize={"20px"}>
                  Women
                </Text>
              </Link>
              <Link to={"/kids"}>
                <Text fontWeight={"bold"} onClick={onClose} fontSize={"20px"}>
                  Kids
                </Text>
              </Link>
              <Link to={"/electronics"}>
                <Text onClick={onClose} fontWeight={"bold"} fontSize={"20px"}>
                  Electronics
                </Text>
              </Link>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
