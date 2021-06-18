import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import { ProductContext } from "../products/ProductProvider"
import { CategoryContext } from "./CategoryProvider"

export const CategoryDetail = () => {
    const { products, getProducts } = useContext(ProductContext)

    const [category, setCategory] = useState([])

    // route: /categories/:categoryId
    const Category = () => {
        const params = useParams();
        return <h1>{params.categoryId}</h1>
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div className="category__component">
            <h1>{Category}</h1>
            <div className="products">
                {products.map(product => {
                    return (
                        <Link to={`/products/${product.id}`}>
                            <h3 key={product.id}>{product.name}</h3>
                        </Link>
                    )
                })
                }
            </div>
        </div>
    )
}