import { Box, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/Products/action";

export const Sidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialBrand = searchParams.getAll("brand");
  const [brand, setBrand] = useState(initialBrand || []);

  const initialCategory = searchParams.getAll("category");
  const [category, setCategory] = useState(initialCategory || []);

  const initialPrice = searchParams.getAll("price");
  const [price, setPrice] = useState([]);

  const [discount, setDiscount] = useState([]);

  const [uniqueBrand, setUniqueBrand] = useState([]);
  const [uniqueCategory, setUniqueCategory] = useState([]);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.ProductsReducer.products);

  const uniqueBrandFun = (products) => {
    let arr = [];
    products &&
      products?.map((item) => {
        arr.push(item.Brand);
      });
    setUniqueBrand((pre) => [...new Set([...arr])]);
  };

  const uniqueCategoryFun = (products) => {
    let arr = [];
    products &&
      products?.map((item) => {
        arr.push(item.category);
      });
    setUniqueCategory((pre) => [...new Set([...arr])]);
  };

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    uniqueBrandFun(products);
    uniqueCategoryFun(products);
  }, [products]);

  const handleInput = () => {};

  const handleFilterBrand = (e) => {
    const newCategory = [...brand];
    if (newCategory.includes(e.target.value)) {
      newCategory.splice(newCategory.indexOf(e.target.value), 1);
    } else {
      newCategory.push(e.target.value);
    }
    setBrand(newCategory);
  };

  const handleFilterCategory = (e) => {
    const newCategory = [...category];
    if (newCategory.includes(e.target.value)) {
      newCategory.splice(newCategory.indexOf(e.target.value), 1);
    } else {
      newCategory.push(e.target.value);
    }
    setCategory(newCategory);
  };

  const handleFilterPrice = (e) => {
    const newCategory = [...price];
    if (newCategory.includes(e.target.value)) {
      newCategory.splice(newCategory.indexOf(e.target.value), 1);
    } else {
      newCategory.push(e.target.value);
    }
    setPrice(newCategory);
  };

  useEffect(() => {
    if (brand || category || price) {
      let params = {};
      brand && (params.brand = brand);
      category && (params.category = category);
      price && (params.price = price);

      setSearchParams(params);
    }
  }, [brand, category, price, setSearchParams]);

  return (
    <>
      <Box className="sidebar_container" onInput={handleInput}>
        <Box id="brand">
          <Heading size={"30px"}>Brand</Heading>
          <Box h={"120px"} overflow={"scroll"} className="sidebar_overflow">
            {uniqueBrand &&
              uniqueBrand.map((ele) => {
                return (
                  <Box key={ele}>
                    <input
                      type="checkbox"
                      value={ele}
                      onChange={handleFilterBrand}
                      checked={brand.includes(ele)}
                    />
                    <label style={{ marginLeft: "5px" }}>{ele}</label>
                  </Box>
                );
              })}
          </Box>
        </Box>
        <Box mt={3} id="category">
          <Heading size={"30px"}>Category</Heading>
          <Box h={"120px"} overflow={"scroll"} className="sidebar_overflow">
            {uniqueCategory &&
              uniqueCategory.map((ele) => {
                return (
                  <Box key={ele}>
                    <input
                      type="checkbox"
                      value={ele}
                      checked={category.includes(ele)}
                      onChange={handleFilterCategory}
                    />
                    <label style={{ marginLeft: "5px" }}>{ele}</label>
                  </Box>
                );
              })}
          </Box>
        </Box>
        <Box id="price">
          <Heading size={"30px"}>Price</Heading>
          <Box>
            <input
              type="checkbox"
              value="500"
              // checked={price.includes("500")}
              onChange={handleFilterPrice}
            />
            <label style={{ marginLeft: "5px" }}>Less ₹500</label>
          </Box>
          <Box>
            <input
              type="checkbox"
              value="1000"
              // checked={price.includes("1000")}
              onChange={handleFilterPrice}
            />
            <label style={{ marginLeft: "5px" }}>Less ₹1000</label>
          </Box>
          <Box>
            <input
              type="checkbox"
              value="2500"
              // checked={price.includes("2500")}
              onChange={handleFilterPrice}
            />
            <label style={{ marginLeft: "5px" }}>Less ₹2500</label>
          </Box>
          <Box>
            <input
              type="checkbox"
              value="5000"
              // checked={price.includes("2501")}
              onChange={handleFilterPrice}
            />
            <label style={{ marginLeft: "5px" }}>Less ₹5000</label>
          </Box>
        </Box>
        {/* <Box mt={3} id="discount">
          <Heading size={"30px"}>Discount</Heading>
          <Box>
            <input
              type="checkbox"
              value="0"
              onChange={(e) => {
                setMinDiscount(e.target.value);
                setMaxDiscount(20);
              }}
            />
            <label style={{ marginLeft: "5px" }}>0% - 20%</label>
          </Box>
          <Box>
            <input
              type="checkbox"
              value="21"
              onChange={(e) => {
                setMinDiscount(e.target.value);
                setMaxDiscount(40);
              }}
            />
            <label style={{ marginLeft: "5px" }}>21% - 40%</label>
          </Box>
          <Box>
            <input
              type="checkbox"
              value="41"
              onChange={(e) => {
                setMinDiscount(e.target.value);
                setMaxDiscount(60);
              }}
            />
            <label style={{ marginLeft: "5px" }}>41% - 60%</label>
          </Box>
          <Box>
            <input
              type="checkbox"
              value="60"
              onChange={(e) => {
                setMinDiscount(e.target.value);
              }}
            />
            <label style={{ marginLeft: "5px" }}>Above 60%</label>
          </Box>
        </Box> */}
      </Box>
    </>
  );
};
