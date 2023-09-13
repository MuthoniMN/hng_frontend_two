import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

const MovieGridTitle = () => {
    return <div className='d-flex m-3 title'>
        <h2>Featured Movies</h2>
        <div className="d-flex link align-items-center">
          <a href='#' className="mr-3" >See More </a>
          <FontAwesomeIcon icon={ faChevronRight }/>
        </div>
  </div>
}

export default MovieGridTitle;