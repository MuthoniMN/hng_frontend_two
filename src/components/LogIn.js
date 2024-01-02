import React from "react";
import { Card, Form, Button } from "react-bootstrap";

export default function LogIn() {
    return (
        <Card style={{ width: "18rem", margin: "0 auto", marginTop: "24px" }}>
            <Card.Title className="text-center fw-bold mt-4" style={{ color: "#BE123C" }}>Log In</Card.Title>
            <Form className="px-4 py-2">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit" style={{ background: "#BE123C", border: "none" }}>
                    Submit
                </Button>
            </Form>
            <Card.Link className="px-4 mb-2" href="/signup">Don't have an account? Sign Up</Card.Link>
        </Card>
    )
}