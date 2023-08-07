import Cart from "../cart/Cart";
import Home from "../Pages/Home";
import WishList from "../Pages/WishList";
import { Route, Routes } from "react-router";
import { PaymentPage } from "../Pages/PaymentPage";
import { CheckoutPage } from "../Pages/CheckoutPage";
import { Login } from "../Components/Register/Login";
import { Signup } from "../Components/Register/Signup";
import { Mens } from "../Components/ProductCategory/Mens";
import { Products } from "../Pages/ProductsPage/Products";
import { Address } from "../Components/MyAccount/Address";
import { Kids } from "../Components/ProductCategory/Kids";
import { MyAccount } from "../Components/MyAccount/MyAccount";
import { Womens } from "../Components/ProductCategory/Womens";
import { Electronics } from "../Components/ProductCategory/Electronics";
import { ProductsDetails } from "../Pages/ProductsDetails/ProductsDetails";
import { PrivateRoute } from "../HOC/PrivateRoute";
import { Box } from "@chakra-ui/react";

export const AllRoutes = () => {
  return (
    <Box mt={["70", "70", "121", "121"]}>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/womens" element={<Womens />} />
        <Route
          path="/address"
          element={
            <PrivateRoute>
              <Address />
            </PrivateRoute>
          }
        />
        <Route
          path="/wishlist"
          element={
            <PrivateRoute>
              <WishList />
            </PrivateRoute>
          }
        />
        <Route path="/products" element={<Products />} />
        <Route
          path="/myaccount"
          element={
            <PrivateRoute>
              <MyAccount />
            </PrivateRoute>
          }
        />
        <Route
          path="/payment"
          element={
            <PrivateRoute>
              <PaymentPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <CheckoutPage />
            </PrivateRoute>
          }
        />
        <Route path="/mens" element={<Mens />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/products/:id" element={<ProductsDetails />} />
      </Routes>
    </Box>
  );
};
