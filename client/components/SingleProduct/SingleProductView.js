import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct, selectSingleProduct } from "../../slices/singleProductSlice";
import { editProduct } from "../../slices/singleProductSlice";

const SingleProduct = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const id = params.id;
    const singleProduct = useSelector(selectSingleProduct);

    const [optionValue, setOptionValue] = useState('');
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        dispatch(fetchProduct(id))
    }, [dispatch, id])

    //if usertype is equal to admin, we can render a different page

    return (
        <>
            <div className="single-product">
                <div className="product-header">
                    Product Name : {`${singleProduct.name}`}
                </div>
                <div productpage="product-page">
                    <img className="product-picture" src={`${singleProduct.imageUrl}`} />
                    Product Price: {`${singleProduct.price}`}
                    <br></br>
                    <select value={optionValue} onChange={e => setOptionValue(e.target.value)}>
                        <option> Normal </option>
                        <option> Egg </option>
                        <option> Shiny </option>
                    </select>
                    <select value={quantity} onChange={e => setQuantity(e.target.value)}>
                        <option> 1 </option>
                        <option> 2 </option>
                        <option> 3 </option>
                        <option> 4 </option>
                        <option> 5 </option>
                    </select><br></br>
                    <button type="buy"> Buy Now </button><br>
                    </br>
                    <button type="cart"> Add to Cart</button>
                </div>
            </div>
        </>
    )
}

export default SingleProduct