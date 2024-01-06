import React from "react";
import SideBar from "../components/SideBar";
import { Link } from "react-router-dom";

const Person = () => {
    return (
        <div className="d-flex gap-5 align-items-center" style={{ width: "100vw" }}>
            <SideBar />
            <div style={{ marginLeft: "250px", height: "100vh", flexBasis: "fill", width: "100vw" }} className=" d-flex align-items-center justify-content-center flex-column">
                <p>This is not a movie.</p>
                <p>It's probably one of the producers</p>
                <Link to={"/"}>Back to Home</Link>
            </div>
        </div>
    )
}

export default Person;