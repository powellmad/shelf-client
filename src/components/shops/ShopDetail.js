import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { ShopContext } from "./ShopProvider"
import { ProductContext } from "./ProductProvider"
import "./Shop.css"

export const ShopDetaill = (shop) => {
    const { shops, getShops } = useContext(ShopContext)
    const { products, getProducts } = useContext(ProductContext)

    useEffect(() => {
        getShops()
        .then(getProducts)
    }, [])

    return (
        <div className="shop__component">
            <h1>{shop.name}</h1>
            <div className="shops">
                {shop.products.map(product => {
                        return <ProductCard key={product.id}/>
                    })
                }
            </div>
        </div>
    )
}