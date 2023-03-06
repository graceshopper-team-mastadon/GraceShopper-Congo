import React from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import QuickAdd from "../QuickAdd";


const PokeballElement = (props) => {
    const { pokeball } = props;
    const pokeballId = props.pokeball.id;
    const pokeballName = props.pokeball.name;
    const pokeballDescription = props.pokeball.description;
    const pokeballImg = props.pokeball.imageUrl;

    return (
        <div className="d-flex justify-content-around">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`${pokeballImg}`} />
                <Card.Body>
                    <Card.Title><Link to={`/products/${pokeballId}`}>{`${pokeballName}`}</Link></Card.Title>
                    <Card.Text>
                        {`${pokeballDescription}`}                    </Card.Text>
                    {<QuickAdd product={pokeball} key={pokeball.id} />}
                </Card.Body>
            </Card>
        </div>
    )
}


export default PokeballElement;