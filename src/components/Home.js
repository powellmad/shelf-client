import React from "react"
import image from "./images/shelf-home-image.jpg"
import "./Home.css"


export const Home = () => {
    return (
        <div className="home">
            <div className="header-text">
                <h1>Welcome to Shelf</h1>
                <p className="text">Welcome to Shelf! Where small businesses can sell excess inventorywith ease. Tired of wasting valuable warehouse space on something that doesn’t make you money? That’s where Shelf comes in! Do you need just a couple of items to finish that job or fulfill that order? Shelf can help with that as well. Simply sign up as a seller to sell your inventory or browse our collection of items.</p>
            </div>
            <img className="header-image" src={image} alt="landing page image of warehouse storage"/>
        </div>
    )
}