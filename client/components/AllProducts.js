import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "./Product";
import { getAllProducts } from "../slices/productsSlice";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.allProducts);

  /*
To show either all products or products of a certain category:
- Option 1:
    Add or replace dispatch with the specific axios call for either:
    getAllProducts, getCategory1, getCategory2
- Option 2:
    Filter with useState in this component? run filter before map.
*/

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <>
      <div className="all-products">
        <h2 clsssName="category-title">Browse All Products</h2>
        <div>
          {products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
