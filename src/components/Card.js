import React from "react"



export default function Card (props) {
    let badgeText
    if (props.data.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.data.location === "Online") {
        badgeText = "ONLINE"
    } 
   
    return(
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="card--image" src={`./images/${props.data.coverImg}`} alt="Card"/>
            <div className="card--stats">
                <img src="./images/star.svg" alt="star"/>
                <span>{props.data. stats.rating}</span>
                <span className="gray">({props.data. stats.reviewCount}) -</span>
                <span className="gray">{props.data.location}</span>
            </div>
            <p className="card--title">{props.data.title}</p>
            <p className="card--price"><span className="bold">From $ {props.data.price} </span> / person</p>

        </div>
    )
}