import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { ShopContext } from "./ShopProvider"
import {ShopCard } from "./ShopCard"
import Typography from '@material-ui/core/Typography';
import "./Shop.css"

export const ShopList = () => {
    const { shops, getShops } = useContext(ShopContext)

    useEffect(() => {
        getShops()
    }, [])

    return (
        <div className="shop__component">
            <Typography className="shops-header" variant="h3">Shops</Typography>

            <div className="shop__cards">
                {shops.map(shop => {
                    return <Typography variant="h5" key={shop.id} className="shop__label">
                        <Link to={`/shops/${shop.id}`}>
                            <ShopCard className="shop_card" key={shop.id} shop={shop} />
                        </Link>
                    </Typography>
                })
                }
            </div>
        </div>
    )
}