import React, { useState, createContext } from "react"

export const CategoryContext = createContext()

export const CategoryProvider = (props) => {
    const [categories, setCategories] = useState([])

    const getCategories = () => {
        return fetch("http://localhost:8000/categories", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("shelf_token")}`
            }
        })
            .then(response => response.json())
            .then(setCategories)
    }

    const getCategoryById = (id) => {
        return fetch(`http://localhost:8000/categories/${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem('shelf_token')}`
            }
        })
            .then(res => res.json())
      }

        return (
        <CategoryContext.Provider value={{
            categories, getCategories, getCategoryById
        }}>
            {props.children}
        </CategoryContext.Provider>
    )

}