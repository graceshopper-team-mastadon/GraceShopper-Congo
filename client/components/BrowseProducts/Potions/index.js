import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPotions } from "../../../slices/categorySlice";
import PotionElement from "./PotionElement";

const Potions = () => {
    const dispatch = useDispatch();
    const potions = useSelector((state) => state.categories.potion);
    useEffect(() => {
        dispatch(getAllPotions())
    }, []);

    return (
        <>
            <div>
                <h1> this is Potions lol </h1>
            </div>
        </>
    )

};
export default Potions;