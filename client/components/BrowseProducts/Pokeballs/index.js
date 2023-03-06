import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokeballs } from "../../../slices/categorySlice";
import PokeballElement from "./PokeballElement"

const Pokeballs = () => {
    const dispatch = useDispatch();
    const pokeballs = useSelector((state) => state.categories.pokeballs);
    useEffect(() => {
        dispatch(getAllPokeballs());
    }, [])

    return (
        <>
            <div>
                <h1> this is pokeballs lol </h1>
            </div>
        </>
    )

};
export default Pokeballs;