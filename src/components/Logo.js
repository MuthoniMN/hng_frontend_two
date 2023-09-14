import React from "react";

const Logo = ( {textColor} ) => {
    return (
        <div className="logo d-flex align-items-center">
            <img src="/tv.svg"  alt="MovieBox"/>
            <h1 className={`text-${textColor}`}>MovieBox</h1>
        </div>
    )
}

export default Logo;