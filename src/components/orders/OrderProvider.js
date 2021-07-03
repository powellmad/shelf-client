import React, { useState, createContext } from "react"

export const OrderContext = createContext()

export const OrderProvider = (props) => {
    const [orders, setOrders] = useState([])

    const getOrders = () => {
        return fetch("http://127.0.0.1:8000/orders", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("shelf_token")}`
            }
        })
            .then(response => {
                const res = response.json()
                setOrders(res)
                return res
            })
    }

    const addToOrder = (id) => {
        return fetch(`http://127.0.0.1:8000/orders`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("shelf_token")}`,
                "Content-Type": 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                "product_id": id
            })
        })
            .then(response => {
                response.json();
            })
    }

    const removeFromOrder = (orderId, productId) => {
        return fetch(`http://127.0.0.1:8000/orders/${orderId}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("shelf_token")}`,
                "Content-Type": 'application/json'
            },
            method: "DELETE",
            body: JSON.stringify({
                "product_id": productId
            })
        }).then(response => response.json())
    }

    const placeOrder = (orderId) => {
        return fetch(`http://127.0.0.1:8000/orders/${orderId}/checkout`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("shelf_token")}`,
                "Content-Type": 'application/json'
            },
            method: "PUT",
            body: JSON.stringify({
                "is_Open": false
            })
        })
            .then(response => response.json())
    }

    return (
        <OrderContext.Provider value={{
            orders, getOrders, addToOrder, removeFromOrder, placeOrder
        }}>
            {props.children}
        </OrderContext.Provider>
    )
}