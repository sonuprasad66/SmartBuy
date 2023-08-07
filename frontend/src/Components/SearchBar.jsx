import { SearchIcon, SmallCloseIcon } from "@chakra-ui/icons";
import {
  Box,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProductsDetails } from "../Redux/Products/action";
import { SEARCH_DATA } from "../Utils/Api";

const getData = async (query) => {
  let res = await axios.get(`${SEARCH_DATA}/search?q=${query}`);
  return res.data;
};

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const navigate = useNavigate("");
  const dispatch = useDispatch();

  useEffect(() => {
    const id = setTimeout(() => {
      getData(query).then((res) => setData(res));
    }, 500);
    if (show) {
      setShow(false);
    }
    return () => clearTimeout(id);
  }, [query]);

  const goToDetailsPage = (id, title) => {
    dispatch(getProductsDetails(id));
    navigate(`/products/${id}`);
    setShow(!show);
  };
  return (
    <Box width="100%">
      <Box pos={"relative"}>
        <InputGroup w={"100%"}>
          <InputLeftElement
            _hover={{ cursor: "pointer" }}
            children={<SearchIcon color="gray.300" />}
          />
          <Input
            type="tel"
            placeholder="Search product here..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
          {query.length !== 0 ? (
            <InputRightElement
              onClick={() => setQuery("")}
              _hover={{ cursor: "pointer" }}
              children={<SmallCloseIcon w={6} h={6} color="gray.300" />}
            />
          ) : (
            ""
          )}
        </InputGroup>
      </Box>
      {query.length == 0 || show ? (
        ""
      ) : (
        <Box
          zIndex={500}
          pos="absolute"
          h={data.length === 0 ? "80px" : "315px"}
          bg="#fff"
          overflow="hidden"
          w={["30%", "36%"]}
          boxShadow="2xl"
          p="4"
          rounded="md"
        >
          {data.length == 0 ? (
            <Text color={"black"} fontSize="15px" fontWeight={"500"}>
              No results
            </Text>
          ) : (
            <>
              {data.map((el) => (
                <HStack
                  gap={2}
                  key={el._id}
                  my={2}
                  _hover={{ cursor: "pointer" }}
                  onClick={() => goToDetailsPage(el._id)}
                >
                  <Image w="40px" h="40px" src={el.Image1} />
                  <Text color={"black"} fontSize="15px" fontWeight={"500"}>
                    {" "}
                    {el.Product_Title}
                  </Text>
                </HStack>
              ))}
            </>
          )}
        </Box>
      )}
    </Box>
  );
};

export default SearchBar;
