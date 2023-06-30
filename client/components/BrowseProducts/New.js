import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "../BrowseProducts/Product";
import { getProductCategory } from "../../slices/productsSlice";

const New = () => {
    const dispatch = useDispatch();
    const genProducts = useSelector((state) => state.products.generationProducts);
    useEffect(() => {
        dispatch(getProductCategory("V"));
    }, []);

    console.log("genproducts", genProducts)

    return (
        <ul className="new">
            {genProducts.map((product) => {
                return (<li className="new-product" key={product.id}>
                    {product.name}
                    <img src={product.imageUrl} className="new-product-photo"></img>
                </li>)
            })}
        </ul>
    )
};
export default New;