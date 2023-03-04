import React from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

const PokemonElement = (props) => {
    <div className="d-flex justify-content-around">
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Add to Cart</Button>
            </Card.Body>
        </Card>
    </div>
}

export default PokemonElement;