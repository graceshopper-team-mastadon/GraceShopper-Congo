import React from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

const PokemonElement = (props) => {
    const pokemonName = props.pokemon.name;
    const pokemonDescription = props.pokemon.description;
    const pokemonImg = props.pokemon.imageUrl;

    return (
        <div className="d-flex justify-content-around">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`${pokemonImg}`} />
                <Card.Body>
                    <Card.Title>{`${pokemonName}`}</Card.Title>
                    <Card.Text>
                        {`${pokemonDescription}`}                    </Card.Text>
                    <Button variant="primary">Add to Cart</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default PokemonElement;