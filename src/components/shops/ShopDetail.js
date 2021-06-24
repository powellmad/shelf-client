import React, { useContext, useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { ShopContext } from "./ShopProvider"
import { ProductCard } from "../products/ProductCard"
import Typography from '@material-ui/core/Typography';
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
            <Typography className="shop-header" variant="h3">{shops.name}</Typography>
            <div className="product_cards">
                {products.map(product => {
                        return <ProductCard key={product.id} product={product} shopName={shops.name}/>
                    })
                }
            </div>
        </div>
    )
}