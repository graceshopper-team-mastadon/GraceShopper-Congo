import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useSelector, useDispatch } from "react-redux";
import Product from "./Product";
import Pagination from "../Pagination";
import { getAllProducts } from "../../slices/productsSlice";

const AllProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.Products);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  // Get current posts
  const indexOfLastItems = currentPage * itemsPerPage;
  const indexOfFirstItems = indexOfLastItems - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItems, indexOfLastItems);

  // Change the page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="browse-products">
        <h2 className="category-title">Browse All Products</h2>
        <div>
          {currentItems.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={products.length}
          paginate={paginate}
        />
      </div>
    </>
  );
};

export default AllProducts;
