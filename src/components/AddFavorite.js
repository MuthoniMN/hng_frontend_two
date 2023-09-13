import React, { useState, useEffect } from "react";

const AddFavourite = ( ) => {
    const [color, setColor] = useState("#ffffff")
    return (
            <FontAwesomeIcon icon={ faHeart } color={color}  onClick={() => color === "#ffffff" ? setColor("#BE123C") : setColor("#ffffff")}/>
    )
}

export default AddFavourite;