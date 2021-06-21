import React, { useContext, useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { CategoryContext } from "./CategoryProvider"
import { ProductCard } from "../products/ProductCard"

export const CategoryDetail = () => {
    const { getCategoryById } = useContext(CategoryContext)
    const [categories, setCategories] = useState({})
    const { categoryId } = useParams()


    useEffect(() => {
        getCategoryById(categoryId)
            .then((response) => {
                setCategories(response)
            })
    }, [])

    let shops = []

    if (categories.shop_set?.length) {
        shops = categories.shop_set
    }

    return (
        <section className="category__products">
            <h1>{categories.label}</h1>
            <div className="products-flex">
                {shops.map(shop => {
                    return <>
                        <div className="product_cards">
                            {shop.products?.map(product => <ProductCard key={product.id} product={product} shopName={shop.name}/>
                        )}</div>
                    </>
                })}
            </div>
        </section>
    )

}