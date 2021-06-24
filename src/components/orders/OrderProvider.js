import React, { useState, createContext } from "react"

export const OrderContext = createContext()

export const OrderProvider = (props) => {
    const [orders, setOrders] = useState([])

    const getOrders = () => {
        return fetch("http://localhost:8000/orders", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("shelf_token")}`
            }
        })
            .then(response => response.json())
            .then((res) => {
                setOrders(res)
                return res
            })
    }

    const addToOrder = (id) => {
        return fetch(`http://localhost:8000/orders`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("shelf_token")}`,
                "Content-Type": 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                "product_id": id
            })
        })
            .then(response => response.json())
    }

    return (
        <OrderContext.Provider value={{
            orders, getOrders, addToOrder
        }}>
            {props.children}
        </OrderContext.Provider>
    )
}