import React from "react";

const Logo = ({ textColor }) => {
    return (
        <a href="/" className="logo d-flex align-items-center">
            <img src="/tv.svg" alt="MovieBox" />
            <h1 className={`d-none d-lg-block d-md-block`} style={{ color: textColor }}>MovieBox</h1>
        </a>
    )
}

export default Logo;