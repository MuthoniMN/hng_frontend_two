import React from "react";

const Ratings = ( { fraction, percent }) => {
    return (
        <div className="d-flex ratings">
            <img src="./IMDB.png" />
            <p className="small">{fraction}</p>
            <img src="./tomato.png" />
            <p className="small">{percent}</p>
        </div>
    )
}

export default Ratings;