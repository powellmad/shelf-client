import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { CategoryContext } from "./CategoryProvider"
import "./Category.css"

export const CategoryList = () => {
    const { categories, getCategories } = useContext(CategoryContext)

    useEffect(() => {
        getCategories()
    }, [])

    return (
        <div className="category__component">
            <h1>Categories</h1>

            <div className="categories">
                {categories.map(category => {
                        return <h3 key={category.id} className="category__label">
                            <Link to={`/categories/${category.id}`}>{ category.label }</Link></h3>
                    })
                }
            </div>
        </div>
    )
}