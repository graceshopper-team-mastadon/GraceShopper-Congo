import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokeballs } from "../../../slices/categorySlice";
import PokeballElement from "./PokeballElement"

const Pokeballs = () => {
    const dispatch = useDispatch();
    const allpokeballs = useSelector((state) => state.categories.pokeballs);
    const state = useSelector((state) => state.categories)

    useEffect(() => {
        dispatch(getAllPokeballs());
    }, [])

    if (allpokeballs.length === 0) {
        return <h1> Loading your products!! </h1>
    } else {
        return (
            <div className="pokeball-view">
                {allpokeballs.map((pokeball) => (
                    <PokeballElement key={pokeball.id} pokeball={pokeball} />
                )
                )}
            </div>
        )
    }

};
export default Pokeballs;