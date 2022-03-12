import React from "react"
import airbnb from "../images/airbnb-logo.svg";

export default function Navbar() {
    return(
        <nav>
            <img src={airbnb} className="nav--logo" alt="airbnb logo" />
        </nav>
    )
}