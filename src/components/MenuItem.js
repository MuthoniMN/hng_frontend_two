import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuItem = ( {icon, value} ) => {
    return (
        <div className="d-flex gap-2">
            <FontAwesomeIcon icon={icon} />
            <p>{value}</p>
        </div>
    )
}

export default MenuItem;