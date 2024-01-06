import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import Logo from "./Logo";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const navigate = useNavigate()

    let user = auth.currentUser

    async function logout(e) {
        await signOut(auth)
            .then(data => {
                navigate("/")
            })
            .catch(err => console.error(err))

    }

    return (
        <nav className="d-flex pt-3 align-items-center gap-2">
            <Logo color={"white"} />
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            {user === null ? <Link to="/signup" className="d-none d-lg-block" role="button">Sign Up</Link> : <button className="d-none d-lg-block" type="submit" onClick={(e) => logout(e)}>Log Out</button>}
        </nav>
    )
}

export default Navigation;