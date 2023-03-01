import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "./Product";
import { getProductCategory } from "../../slices/productsSlice";

const CategoryView = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.Products);

  // Add category as argument to getProductCategory:
  useEffect(() => {
    dispatch(getProductCategory());
  }, [dispatch]);

  return (
    <>
      <div className="browse-products">
        <h2 clsssName="category-title"></h2>
        <div>
          {products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryView;
