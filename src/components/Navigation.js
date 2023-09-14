import React, {useState} from "react";
import SearchBar from "./SearchBar";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
    const [searchTerm, setSearchTerm] = useState("")

    return (
        <nav className="d-flex pt-3 align-items-center">
            <Logo color={"white"}/>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            <a href="/" className="d-none d-lg-block">Sign In</a>
            <button className="menu">
            <FontAwesomeIcon icon={faBars} />
            </button>
        </nav>
    )
}

export default Navigation;