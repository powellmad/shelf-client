import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { ShopContext } from "./ShopProvider"
import "./Shop.css"

export const ShopList = () => {
    const { shops, getShops } = useContext(ShopContext)

    useEffect(() => {
        getShops()
    }, [])

    return (
        <div className="shop__component">
            <h1>Shops</h1>

            <div className="shops">
                {shops.map(shop => {
                        return <h3 key={shop.id} className="shop__name">
                            <Link to="/{shop.id}">{ shop.name }</Link></h3>
                    })
                }
            </div>
        </div>
    )
}