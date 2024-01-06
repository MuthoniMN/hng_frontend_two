import React, { useState } from "react";
import SearchResults from "./SearchResults";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [searchResults, setSearchResults] = useState([])

    const fetchData = async (value) => {
        let url = `https://api.themoviedb.org/3/search/multi?query=${value}&language=en-US&api_key=${process.env.REACT_APP_API_KEY}`;

        const response = await fetch(url)
        const data = await response.json()

        return data;
    }

    const handleChange = (val) => {
        setSearchTerm(val);
        fetchData(val)
            .then(results => setSearchResults(results.results))
        console.log(searchResults)
    }

    return (
        <div className="col col-sm-5">
            <input type="text" placeholder="What do you want to watch?" value={searchTerm} onChange={(event) => handleChange(event.target.value)} className="form-control" />
            <SearchResults results={searchResults} />
        </div>
    )
}

export default SearchBar;