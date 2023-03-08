import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "../BrowseProducts/Product";
import { getProductCategory } from "../../slices/productsSlice";
import GenVProducts from "../GenerationView/Gen5";

const New = () => {
    return (
        <>
            <div>
                <GenVProducts />
            </div>
        </>
    )
};
export default New;