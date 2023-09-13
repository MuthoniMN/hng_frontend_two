import React from "react";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faHome, faRightFromBracket, faTelevision, faVideoCamera } from "@fortawesome/free-solid-svg-icons";
import MenuItem from "./MenuItem";

const SideBar = () => {
    return (
        <div className="sidebar">
            <Logo />
            <MenuItem icon={faHome} value={"Home"} />
            <MenuItem icon={faVideoCamera} value={"Movies"} />
            <MenuItem icon={faTelevision} value={"TV Series"} />
            <MenuItem icon={faCalendarDays} value={"Upcoming"} />

            <div className="alert">
                <h4>Play movie quizes and earn free tickets</h4>
                <p className="gray">50k people are playing now</p>
                <button>Start Playing</button>
            </div>
            
            <MenuItem icon={faRightFromBracket} value={"Log Out"} />
        </div>
    )
}