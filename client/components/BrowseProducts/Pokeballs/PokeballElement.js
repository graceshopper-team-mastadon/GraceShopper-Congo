import React from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

const PokeballElement = (props) => {
    const pokeballName = props.pokeball.name;
    const pokeballDescription = props.pokeball.description;
    const pokeballImg = props.pokeball.imageUrl;

    return (
        <div className="d-flex justify-content-around">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`${pokeballImg}`} />
                <Card.Body>
                    <Card.Title>{`${pokeballName}`}</Card.Title>
                    <Card.Text>
                        {`${pokeballDescription}`}                    </Card.Text>
                    <Button variant="primary">Add to Cart</Button>
                </Card.Body>
            </Card>
        </div>
    )
}


export default PokeballElement;