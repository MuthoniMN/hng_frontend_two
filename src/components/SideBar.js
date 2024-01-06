import React from "react";
import Logo from "./Logo";
import { faCalendarDays, faHome, faRightFromBracket, faTelevision, faVideoCamera } from "@fortawesome/free-solid-svg-icons";
import MenuItem from "./MenuItem";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const SideBar = () => {
    const { setUser } = useAuth;
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
        <div className="sidebar d-flex flex-column gap-3">
            <Logo textColor={"#BE123C"} />
            <MenuItem icon={faHome} value={"Home"} link={"/"} />
            <MenuItem icon={faVideoCamera} value={"Movies"} link={"/movies"} />
            <MenuItem icon={faTelevision} value={"TV Series"} link={"/tv-series"} />
            <MenuItem icon={faCalendarDays} value={"Upcoming"} link={"/upcoming"} />

            <MenuItem icon={faRightFromBracket} value={"Log Out"} onClick={(e) => logout(e)} />
        </div>
    )
}

export default SideBar;