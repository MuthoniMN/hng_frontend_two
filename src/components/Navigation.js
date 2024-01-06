import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../context/AuthContext";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const { currentUser, setUser } = useAuth;
    const navigate = useNavigate()

    async function logout(e) {
        await signOut(auth)
            .then(data => {
                setUser(null)
                navigate("/")
            })
            .catch(err => console.error(err))

    }

    return (
        <nav className="d-flex pt-3 align-items-center gap-2">
            <Logo color={"white"} />
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            {currentUser === null ? <a href="/signup" className="d-none d-lg-block">Sign Up</a> : <button className="d-none d-lg-block" type="submit" onClick={(e) => logout(e)}>Log Out</button>}
        </nav>
    )
}

export default Navigation;