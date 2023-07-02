import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useSelector, useDispatch } from "react-redux";
import Product from "./Product";
import Pagination from "../Pagination";
import { getAllProducts } from "../../slices/productsSlice";
import CategoryBar from "../CategoryBar";

const AllProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.Products);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

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
      <CategoryBar category="All Products" />
      <div class="deck">
        {currentItems.map((product) => (
          <div key={product.id} id="cardItem" className="col-xs-2">
            <Product product={product} key={product.id} />
          </div>
        ))}
      </div> <br></br>
      <div>
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

