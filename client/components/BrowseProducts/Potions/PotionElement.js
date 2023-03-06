import React from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";


const PotionElement = (props) => {
    const potionId = props.potion.id;
    const potionName = props.potion.name;
    const potionDescription = props.potion.description;
    const potionImg = props.potion.imageUrl;

    return (
        <div className="d-flex justify-content-around">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`${potionImg}`} />
                <Card.Body>
                    <Card.Title><Link to={`/products/${potionId}`}>{`${potionName}`}</Link></Card.Title>
                    <Card.Text>
                        {`${potionDescription}`}                    </Card.Text>
                    <Button variant="primary">Add to Cart</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default PotionElement;