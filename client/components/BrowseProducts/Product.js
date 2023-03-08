import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import QuickAdd from "./QuickAdd";

const Product = (props) => {
  const { product } = props;

  return (
    <Card style={{ width: '18rem', height: '15rem', float: 'left', padding: '10px', margin: '10px', display: 'inline-block' }}>
      <Card.Img variant="top" src={product.imageUrl} />
      <Card.Body style={{ height: '13rem' }}>
        <Card.Title>
          <Link to={`/products/${product.id}`}>{product.name}</Link>
        </Card.Title>
        <Card.Text style={{ height: '10rem', overflow: 'scroll', overflowX: 'hidden', overflowY: "auto" }}>
          Price: $ {`${product.price}`}
        </Card.Text>
        <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
          {<QuickAdd product={product} key={product.id} />}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Product;
