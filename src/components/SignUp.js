import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    const navigate = useNavigate()
    const { setUser, currentUser } = useAuth()
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    if (currentUser !== null) {
        navigate("/")
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await createUserWithEmailAndPassword(auth, email, password)
                .then(data => {
                    setUser(data)
                    navigate("/")
                })
                .catch(err => console.error(err))
        } catch (err) {
            console.error(err)
        }
    }
    return (
        <Card style={{ width: "18rem", margin: "0 auto", marginTop: "24px" }}>
            <Card.Title className="text-center fw-bold mt-4" style={{ color: "#BE123C" }}>Sign Up</Card.Title>
            <Form className="px-4 py-2">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="I agree to the terms and conditions" />
                </Form.Group>
                <Button variant="primary" type="submit" style={{ background: "#BE123C", border: "none" }} onClick={(e) => handleSubmit(e)}>
                    Submit
                </Button>
            </Form>
            <Card.Link className="px-4 mb-2" href="/login" >Have an account? Log In</Card.Link>
        </Card>
    )
}