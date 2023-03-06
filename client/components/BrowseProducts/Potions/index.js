import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPotions } from "../../../slices/categorySlice";
import PotionElement from "./PotionElement";

const Potions = () => {
    const dispatch = useDispatch();
    const potionss = useSelector((state) => state.categories.potions);
    useEffect(() => {
        dispatch(getAllPotions())
    }, []);
    console.log("what is potions?", potionss)
    if (potionss.length === 0) {
        return <h1> Loading your products!! </h1>
    } else {
        return (
            <div className="potion-view">
                {potionss.map((potion) => (
                    <PotionElement key={potion.id} potion={potion} />
                )
                )}
            </div>
        )
    }

};
export default Potions;