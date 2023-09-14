import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const AddFavourite = ( ) => {
    const [color, setColor] = useState("#ffffff")
    return (
            <FontAwesomeIcon icon={ faHeart } color={color}  onClick={() => color === "#ffffff" ? setColor("#BE123C") : setColor("#ffffff")}/>
    )
}

export default AddFavourite;