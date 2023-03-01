import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from "../../slices/singleProductSlice";
import { editProduct } from "../../slices/singleProductSlice";

const SingleProduct = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const id = params.id;
    const singleProduct = useSelector((state) => state.singleProduct);

    useEffect(() => {
        dispatch(fetchProduct(id))
    }, [dispatch, id])

    //if usertype is equal to admin, we can render a different page

    return (
        <>
            <div className="single-product">
                <h1> Product Name : {`${singleProduct.name}`}</h1>
                <img className="product-picture" src={`${singleProduct.imageUrl}`} />
            </div>
        </>
    )
}

export default SingleProduct