import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Card, Form, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { editProduct } from "../../slices/productsSlice";
import { deleteSingleProduct } from "../../slices/productsSlice";

const EditProduct = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const product = location.state.item;
  const [isDeleted, setIsDeleted] = useState(product);
  const id = product.id;

  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [category, setCategory] = useState(product.category);
  const [inventory, setInventory] = useState(product.inventory);
  const [imageUrl, setImageUrl] = useState(product.imageUrl);
  const [price, setPrice] = useState(product.price);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = product.id;
    dispatch(
      editProduct({
        id,
        name,
        description,
        category,
        inventory,
        imageUrl,
        price,
      })
    );
  };

  const deleteHandler = async (id) => {
    await dispatch(deleteSingleProduct(id));
    setIsDeleted(false);
  };
  const cancelEdits = () => {
    setName(product.name);
    setDescription(product.description);
    setCategory(product.category);
    setInventory(product.inventory);
    setImageUrl(product.imageUrl);
    setPrice(product.price);
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Card>
          {isDeleted ? (
            <Card.Body>
              <Card.Title>Edit Product</Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  ></Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  ></Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                  ></Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Inventory</Form.Label>
                  <Form.Control
                    type="number"
                    value={inventory}
                    onChange={(e) => setInventory(e.target.value)}
                    required
                  ></Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                  ></Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>imageUrl</Form.Label>
                  <Form.Control
                    type="url"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    required
                  ></Form.Control>
                </Form.Group>
                <div className="mb-2">
                  <Button variant="success" type="submit">
                    Confirm Edits
                  </Button>
                  <Button variant="secondary" onClick={cancelEdits}>
                    Cancel Edits
                  </Button>
                  <Button variant="danger" onClick={() => deleteHandler(id)}>
                    Delete Product
                  </Button>
                </div>
              </Form>
            </Card.Body>
          ) : (
            <Card.Body>
              <Card.Text>This product has been deleted</Card.Text>
            </Card.Body>
          )}
        </Card>
        <br />
        <Card>
          <Card.Body>
            <Link to="/dashboard/products">Back to All Products</Link>
          </Card.Body>
          <Card.Body>
            <Link to="/dashboard">Back to Dashboard</Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default EditProduct;
