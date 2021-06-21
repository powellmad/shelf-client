import React, { useContext, useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { ShopContext } from "./ShopProvider"
import "./Shop.css"

export const ShopDetail = () => {
    const { getShops, getShopById } = useContext(ShopContext)
    const [ shops, setShops ] = useState([])
    const { shopId } = useParams()

    useEffect(() => {
        getShopById(shopId)
        .then(setShops)
    }, [])

    return (
        <div className="shop__component">
            <h1>{shops.name}</h1>
            {/* <div className="shops">
                {shop.products.map(product => {
                        return <ProductCard key={product.id}/>
                    })
                }
            </div> */}
        </div>
    )
}