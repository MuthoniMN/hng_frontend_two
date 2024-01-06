import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { auth } from "../firebase"
import { useNavigate } from "react-router-dom";

export default function LogIn() {
    const navigate = useNavigate()
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    let user = auth.currentUser

    if (user) {
        navigate("/")
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password)
                .then(data => {
                    navigate("/")
                })
                .catch(err => console.error(err))
        } catch (err) {
            console.error(err)
        }
    }
    return (
        <Card style={{ width: "18rem", margin: "0 auto", marginTop: "24px" }}>
            <Card.Title className="text-center fw-bold mt-4" style={{ color: "#BE123C" }}>Log In</Card.Title>
            <Form className="px-4 py-2">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
                </Form.Group>
                <Button variant="primary" type="submit" style={{ background: "#BE123C", border: "none" }} onClick={(e) => handleSubmit(e)}>
                    Submit
                </Button>
            </Form>
            <Card.Link className="px-4 mb-2" href="/signup">Don't have an account? Sign Up</Card.Link>
        </Card>
    )
}