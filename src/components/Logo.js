import React from "react";

const Logo = ({ textColor }) => {
    return (
        <a href="/" className="logo d-flex align-items-center text-decoration-none mb-4">
            <img src="/tv.svg" alt="MovieBox" />
            <h1 className={`d-none d-lg-block d-md-block`} style={{ color: textColor }}>MovieBox</h1>
        </a>
    )
}

export default Logo;