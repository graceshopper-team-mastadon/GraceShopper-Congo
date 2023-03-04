import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemon } from "../../../slices/categorySlice";
import PokemonElement from "./PokemonElement";

const Pokemon = () => {
    const dispatch = useDispatch();
    const pokemons = useSelector((state) => state.categories.pokemon);
    useEffect(() => {
        dispatch(getAllPokemon());
    }, []);
    console.log("what is pokemons? ====", pokemons)
    // pokemon is an array of three objects

    return (
        <div className="pokemon-view">
            {/* {pokemons.map((pokemon) => (
                <PokemonElement key={pokemon.id} />
            )
            )} */}
            THIS IS A WORK IN PROGRESS!!!!
        </div>
    )
};
export default Pokemon;


