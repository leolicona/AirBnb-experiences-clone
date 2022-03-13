import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import cardsData from "./data/data"
import "./styles.css"

export default function App() {
    console.log('Data:', cardsData)
         const CardElements = cardsData.map( (data) => {
            return <Card
                img={data.coverImg}
                rating={data.stats.rating}
                reviewCount={data.stats.reviewCount}
                country={data.location}
                title={data.title}
                price={data.price}
            />    
    })
    
    return(
        <div>
            <Navbar/>
            <Hero/>
            
            {CardElements}
        </div>
    )
}