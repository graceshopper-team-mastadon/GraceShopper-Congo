import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AllProducts from "./components/BrowseProducts/AllProducts";
import SingleProduct from "./components/SingleProduct/SingleProductView"
// import CategoryView from "./components/BrowseProducts/CategoryView";
import NavBar from "./components/NavBar";
import PokeHome from "./components/PokeHome";
import Signup from "./components/Signup";
import Login from "./components/Login";

const App = () => {
  return (
    <>
      <div>{<PokeHome />}</div>
      <div>{<NavBar />}</div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<AllProducts />} />
        <Route exact path="/products/:id" element={<SingleProduct />} />
        {/* <Route exact path = "/products/:category" element={<CategoryView/>} /> */}
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
