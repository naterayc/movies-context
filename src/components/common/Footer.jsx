import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer>
            <span className="content-highlight"> Naterayc - {year} </span>
        </footer>
    )
};

export default Footer;
