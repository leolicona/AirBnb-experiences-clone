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
               {...data}
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