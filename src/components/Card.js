import React from "react"



export default function Card (props) {
    const route = "../images/"
   
    return(
        <div className="card">
            <img className="card--image" src={`./images/${props.img}`} alt="Card"/>
            <div className="card--stats">
                <img src="./images/star.svg" alt="star"/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) -</span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From $ {props.price} </span> / person</p>

        </div>
    )
}