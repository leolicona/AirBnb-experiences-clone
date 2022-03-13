import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import cardsData from "./data/data"
import "./styles.css"

export default function App() {
         const CardElements = cardsData.map( (data) => {
            return <Card
                key={data.id}
                img={data.coverImg}
                rating={data.stats.rating}
                reviewCount={data.stats.reviewCount}
                location={data.location}
                title={data.title}
                price={data.price}
                openSpots={data.openSpots}
            />    
    })
    
    return(
        <div>
            <Navbar/>
            <Hero/>
            <section className="cards-list">
                {CardElements}
            </section> 
        </div>
    )
}