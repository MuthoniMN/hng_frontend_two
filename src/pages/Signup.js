import React from "react";
import Logo from "../components/Logo"
import SignUp from "../components/SignUp";

export default function Signup() {
    return (
        <div className="App">
            <div style={{ margin: "0 auto", width: "fit-content", padding: "24px 0" }}>
                <Logo textColor={"#BE123C"} />
            </div>
            <SignUp />
        </div>
    )
}