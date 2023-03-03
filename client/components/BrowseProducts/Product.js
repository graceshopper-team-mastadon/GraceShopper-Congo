import React from "react";
import { Link } from "react-router-dom";
import QuickAdd from "./QuickAdd";

const Product = (props) => {
  const { product } = props;

  return (
    <div className="product-element">
      <h2>
        <Link to={`/products/${product.id}`}>{product.name}</Link>
      </h2>
      <img src={product.imageUrl} />
      <div>{product.price}</div>
      <div>{<QuickAdd product={product} />}</div>
    </div>
  );
};

export default Product;
