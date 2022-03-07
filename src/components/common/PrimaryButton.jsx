import React from "react";
import { Link } from "react-router-dom";

const PrimaryButton = ({ to, text, className }) => {

    return (
        <Link to={to} className={className}>
            <div> {text} </div>
        </Link>
    );
}

export default PrimaryButton;