import React from "react";
import Logo from "../components/Logo"
import SignUp from "../components/SignUp";
import { AuthContextProvider } from "../context/AuthContext";

export default function Signup() {
    return (
        <AuthContextProvider>
            <div className="App" style={{ width: "100%" }}>
                <div style={{ margin: "0 auto", width: "fit-content", padding: "24px 0" }}>
                    <Logo textColor={"#BE123C"} />
                </div>
                <SignUp />
            </div>
        </AuthContextProvider>
    )
}