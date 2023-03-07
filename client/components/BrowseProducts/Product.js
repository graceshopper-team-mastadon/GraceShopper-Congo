import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import QuickAdd from "./QuickAdd";

const Product = (props) => {
  const { product } = props;

  return (
    <div className="d-flex justify-content-around">
      <div class="row">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={product.imageUrl} />
          <Card.Body>
            <Card.Title><Link to={`/products/${product.id}`}>{product.name}</Link></Card.Title>
            <Card.Text>
              Price: {`${product.price}`} <br></br>
              Why is he so squished?</Card.Text>
            {<QuickAdd product={product} key={product.id} />}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Product;

