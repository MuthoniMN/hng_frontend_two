import React from "react";

const SearchBar = ({seachTerm, setSearchTerm}) => {
    return (
        <div className="col col-sm-6 d-none d-lg-block">
            <input type="text" placeholder="What do you want to watch?" value={seachTerm} onChange={(event) => setSearchTerm(event.target.value)}className="form-control"/>
        </div>
    )
}

export default SearchBar;