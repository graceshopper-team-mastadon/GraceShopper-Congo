import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "./Product";
import { getAllProducts } from "../../slices/productsSlice";

const AllProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.Products);

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
