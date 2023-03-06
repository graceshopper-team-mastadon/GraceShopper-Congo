import React, { useState } from "react";
const axios = require("axios");
import { Card, Form, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    const signOut = async (e) => {
        //andrew write your thing here
        e.preventDefault();
        await axios.get('/auth/logout')
        navigate('/');
    }

    return (
        <div
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}
        >
            <div className="w-100" style={{ maxWidth: "400px" }}>
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Sign Out</h2>
                        <Form>
                            <Form.Group id="signout">
                                <Form.Label>Are you sure you want to sign out?</Form.Label>
                            </Form.Group>
                            <Button onClick={signOut} className="w-100" type="submit">
                                Sign Out
                            </Button><br></br>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}
