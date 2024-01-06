import React from "react";
import { Link } from "react-router-dom";

const SearchResults = ({ results }) => {
    return (
        <>
            {
                results ?
                    <div className="w-full bg-white" style={{ position: "absolute", width: "fit-content" }}>
                        {results.map((res, i) => {
                            if (i <= 10) {
                                return <Link to={`/${res.media_type}/${res.id}`} className="text-black d-block px-4 py-2" key={res.id} >{res.name || res.title}</Link>
                            }
                        })}
                    </div >

                    : ""
            }
        </>
    )
}

export default SearchResults