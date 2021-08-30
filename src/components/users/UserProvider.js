import React, { useState, createContext } from "react"

export const ShopContext = createContext()

export const ShopProvider = (props) => {

    const getUserById = (id) => {
        return fetch(`http://shelf-sm.herokuapp.com/users/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem('shelf_token')}`
            }
        })
            .then(res => res.json())
    }

        return (
        <ShopContext.Provider value={{
            getUserById
        }}>
            {props.children}
        </ShopContext.Provider>
    )
}