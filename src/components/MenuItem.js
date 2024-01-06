import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const MenuItem = ({ icon, value, link }) => {
    return (
        <Link to={link} className="d-flex gap-2 gap-sm-4 text-decoration-none" style={{ color: "#BE123C" }}>
            <FontAwesomeIcon icon={icon} className="mIcon" />
            <p className="d-none d-lg-block d-md-block">{value}</p>
        </Link>
    )
}

export default MenuItem;