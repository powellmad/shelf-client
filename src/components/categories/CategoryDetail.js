import React, { useContext, useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { CategoryContext } from "./CategoryProvider"
import { ProductCard } from "../products/ProductCard"
import "./Category.css"

export const CategoryDetail = () => {
    const { getCategoryById } = useContext(CategoryContext)
    const [categories, setCategories] = useState({})
    const { categoryId } = useParams()

    console.log(categoryId)
    console.log(categories)

    useEffect(() => {
        getCategoryById(categoryId)
            .then((response) => {
                setCategories(response)
            })
    }, [])

    let shops = []
    let products = []
    
    if (categories.shop_set?.length) {
        shops = categories.shop_set
        products = shops[0].products
    }

    return (
        <section className="category__products">
            <h1>{categories.label}</h1>
            <div>
                {products.map(product => {
                    <ProductCard key={product.id} product={product}/>
                })}
            </div>
        </section>
    )

}