import React, { useState, createContext } from "react"

export const ProductContext = createContext()

export const ProductProvider = (props) => {
    const [products, setProducts] = useState([])

    const getProducts = () => {
        return fetch("http://localhost:8000/products", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("shelf_token")}`
            }
        })
            .then(response => response.json())
            .then(setProducts)
    }

    const getProductById = (id) => {
        return fetch(`http://localhost:8000/products/${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem('shelf_token')}`
            }
        })
            .then(res => res.json())
      }

        return (
        <ProductContext.Provider value={{
            products, getProducts, getProductById
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}