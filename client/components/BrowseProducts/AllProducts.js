import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "./Product";
import { getAllProducts } from "../../slices/productsSlice";

const AllProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.Products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <>
      <div className="browse-products">
        <h2 className="category-title">Browse All Products</h2>
        <div>
          {products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AllProducts;
