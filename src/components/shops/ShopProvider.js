import React, { useState, createContext } from "react"

export const ShopContext = createContext()

export const ShopProvider = (props) => {
    const [shops, setShops] = useState([])

    const getShops = () => {
        return fetch("http://localhost:8000/shops", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("shelf_token")}`
            }
        })
            .then(response => response.json())
            .then(setShops)
    }

    const getShopById = (id) => {
        return fetch(`http://localhost:8000/shops/${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem('shelf_token')}`
            }
        })
            .then(res => res.json())
      }

        return (
        <ShopContext.Provider value={{
            shops, getShops, getShopById
        }}>
            {props.children}
        </ShopContext.Provider>
    )
}