import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuItem = ( {icon, value} ) => {
    return (
        <>
            <FontAwesomeIcon icon={icon} />
            <p className="pl-2">{value}</p>
        </>
    )
}

export default MenuItem;