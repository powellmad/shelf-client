import React, { useState, createContext } from "react"

export const ShopContext = createContext()

export const ShopProvider = (props) => {
    const [shops, setShops] = useState([])

    const getShops = () => {
        return fetch("https://shelf-sm.herokuapp.com/shops", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("shelf_token")}`
            }
        })
            .then(response => response.json())
            .then(setShops)
    }

    const getShopById = (id) => {
        return fetch(`https://shelf-sm.herokuapp.com/shops/${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem('shelf_token')}`
            }
        })
            .then(res => res.json())
    }

    const addShop = newShop => {
        return fetch(`https://shelf-sm.herokuapp.com/shops`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("shelf_token")}`,
                "Content-Type": 'application/json'
            },
            method: "POST",
            body: JSON.stringify(newShop)
        })
            .then(response => response.json())
    }

        return (
        <ShopContext.Provider value={{
            shops, getShops, getShopById, addShop
        }}>
            {props.children}
        </ShopContext.Provider>
    )
}