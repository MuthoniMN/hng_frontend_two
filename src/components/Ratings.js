import React from "react";

const Ratings = ( { fraction, percent }) => {
    return (
        <div className="d-flex ratings">
            <img src="/IMDB.png" alt="IMDB"/>
            <p className="small">{fraction}</p>
            <img src="/tomato.png" alt="Tomato rating" />
            <p className="small">{percent}</p>
        </div>
    )
}

export default Ratings;