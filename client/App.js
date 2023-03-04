import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AllProducts from "./components/BrowseProducts/AllProducts";
import SingleProduct from "./components/SingleProduct/SingleProductView";
// import CategoryView from "./components/BrowseProducts/CategoryView";
import NavBar from "./components/NavBar";
import PokeHome from "./components/PokeHome";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Cart from "./components/Cart";
import UserProfile from "./components/AccountView/UserProfile";
import OrderHistory from "./components/AccountView/OrderHistory";
import AddressBook from "./components/AccountView/AddressBook";
import PaymentCards from "./components/AccountView/PaymentCards";
import Feedback from "./components/AccountView/Feedback";
import Signout from "./components/Signout";
import Dashboard from "./components/AccountView/Dashboard"
import New from "./components/BrowseProducts/New";
import Pokemon from "./components/BrowseProducts/Pokemon";
import Potions from "./components/BrowseProducts/Potions";
import Pokeballs from "./components/BrowseProducts/Pokeballs";

const App = () => {
  return (
    <>
      <div>{<PokeHome />}</div>
      <div>{<NavBar />}</div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<AllProducts />} />
        <Route exact path="/products/:id" element={<SingleProduct />} />
        <Route exact path="/new" element={<New />} />
        <Route exact path="/category/pokemon-all" element={<Pokemon />} />
        <Route exact path="/category/potions" element={<Potions />} />
        <Route exact path="/category/pokeballs" element={<Pokeballs />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/signout" element={<Signout />} />
        <Route exact path="/profile" element={<UserProfile />} />
        <Route exact path="/order-history" element={<OrderHistory />} />
        <Route exact path="/address-book" element={<AddressBook />} />
        <Route exact path="/payment-cards" element={<PaymentCards />} />
        <Route exact path="/feedback" element={<Feedback />} />
        <Route exact path="/dashboard" element={<Dashboard />} />

      </Routes>
    </>
  );
};

export default App;
