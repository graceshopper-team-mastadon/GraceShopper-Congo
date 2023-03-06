import React from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import QuickAdd from "../QuickAdd";

const PokemonElement = (props) => {
    const { pokemon } = props;
    const pokemonId = props.pokemon.id;
    const pokemonName = props.pokemon.name;
    const pokemonDescription = props.pokemon.description;
    const pokemonImg = props.pokemon.imageUrl;

    return (
        <div className="d-flex justify-content-around">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`${pokemonImg}`} />
                <Card.Body>
                    <Card.Title><Link to={`/products/${pokemonId}`}>{`${pokemonName}`}</Link></Card.Title>
                    <Card.Text>
                        {`${pokemonDescription}`}                    </Card.Text>
                    {<QuickAdd product={pokemon} key={pokemon.id} />}
                </Card.Body>
            </Card>
        </div>
    )
}

export default PokemonElement;