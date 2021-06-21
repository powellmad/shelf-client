import React, { useContext, useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { ShopContext } from "./ShopProvider"
import { ProductCard } from "../products/ProductCard"
import "../products/Product.css"
import "./Shop.css"

export const ShopDetail = () => {
    const { getShopById } = useContext(ShopContext)
    const [shops, setShops] = useState([])
    const { shopId } = useParams()

    useEffect(() => {
        getShopById(shopId)
            .then(setShops)
    }, [])

    let products = []

    if (shops.products?.length) {
        products = shops.products
    }

    return (
        <div className="shop__products">
            <h1>{shops.name}</h1>
            <div className="product_cards">
                {products.map(product => {
                        return <ProductCard key={product.id} product={product} shopName={shops.name}/>
                    })
                }
            </div>
        </div>
    )
}