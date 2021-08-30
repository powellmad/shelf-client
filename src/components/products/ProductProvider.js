import React, { useState, createContext } from "react"

export const ProductContext = createContext()

export const ProductProvider = (props) => {
    const [products, setProducts] = useState([])

    const getProducts = () => {
        return fetch("http://shelf-sm.herokuapp.com/products", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("shelf_token")}`
            }
        })
            .then(response => response.json())
            .then(setProducts)
    }

    const getProductById = (id) => {
        return fetch(`http://shelf-sm.herokuapp.com/products/${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem('shelf_token')}`
            }
        })
            .then(res => res.json())
      }

    const addProduct = newProduct => {
        return fetch(`http://shelf-sm.herokuapp.com/products`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("shelf_token")}`,
                "Content-Type": 'application/json'
            },
            method: "POST",
            body: JSON.stringify(newProduct)
        })
            .then(response => response.json())
    }

        return (
        <ProductContext.Provider value={{
            products, getProducts, getProductById, addProduct
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}