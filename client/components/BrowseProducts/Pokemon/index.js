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
    // pokemon is an array of three objects

    if (pokemons.length === 0) {
        return <h1> Loading your products!! </h1>
    } else {
        return (
            <div className="pokemon-view">
                {pokemons.map((pokemon) => (
                    <PokemonElement key={pokemon.id} pokemon={pokemon} />
                )
                )}
            </div>
        )
    }

};
export default Pokemon;


