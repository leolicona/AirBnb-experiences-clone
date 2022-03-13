import React from "react"
import ImageCard from "../images/katie-zafares.png"
import Star from "../images/star.svg"

export default function Card (props) {
    return(
        <div className="card">
            <img className="card--image" src={props.img} alt="Card"/>
            <div className="card--stats">
                <img src={Star} alt="star"/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) -</span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From $ {props.price} </span> / person</p>

        </div>
    )
}