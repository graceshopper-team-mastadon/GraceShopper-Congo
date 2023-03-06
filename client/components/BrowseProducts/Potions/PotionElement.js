import React from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import QuickAdd from "../QuickAdd";


const PotionElement = (props) => {
    const { potion } = props;
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
                    {<QuickAdd product={potion} key={potion.id} />}
                </Card.Body>
            </Card>
        </div>
    )
}

export default PotionElement;