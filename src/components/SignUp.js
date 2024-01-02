import React from "react";
import { Card, Form, Button } from "react-bootstrap";

export default function SignUp() {
    return (
        <Card style={{ width: "18rem", margin: "0 auto", marginTop: "24px" }}>
            <Card.Title className="text-center fw-bold mt-4" style={{ color: "#BE123C" }}>Sign Up</Card.Title>
            <Form className="px-4 py-2">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="I agree to the terms and conditions" />
                </Form.Group>
                <Button variant="primary" type="submit" style={{ background: "#BE123C", border: "none" }}>
                    Submit
                </Button>
            </Form>
            <Card.Link className="px-4 mb-2" href="/login" >Have an account? Log In</Card.Link>
        </Card>
    )
}