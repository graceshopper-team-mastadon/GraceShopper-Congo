import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AllProducts from "./components/BrowseProducts/AllProducts";
import CategoryView from "./components/BrowseProducts/CategoryView";
import Signup from "./components/Signup";
import Login from "./components/LogIn";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<AllProducts />} />
        <Route exact path="/products/:id" element={<CategoryView />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
