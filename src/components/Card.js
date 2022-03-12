import React from "react"
import ImageCard from "../images/katie-zafares.png"
import Star from "../images/star.svg"

export default function Card() {
    return(
        <div className="card">
             <img className="card--image" src={ImageCard} alt="Card"/>
            <div className="card--stats">
                <img src={Star} alt="star"/>
                <span>5.0</span>
                <span className="gray">(6) -</span>
                <span className="gray">USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p className="bold"><span>From $136 </span> / person</p>

        </div>
    )
}