import React, { useContext, useEffect, useState } from "react"
import { ProductCard } from "../products/ProductCard"
import { OrderContext } from "./OrderProvider"
import Typography from '@material-ui/core/Typography';
import "../products/Product.css"
import "./Order.css"

export const OrderCart = () => {
    const { orders, getOrders } = useContext(OrderContext)
    const [cart, setOrder] = useState([])

    useEffect(() => {
        getOrders()
            .then((res) => {
                const cart = res.find(order => order.is_open === true)
                console.log("cart", cart)
                setOrder(cart)
            })
    }, [])

    return (
        <div className="orders">
            <Typography className="cart-header" variant="h3">Shopping Cart</Typography>
            <div className="product_cards">
                {cart.products?.map(product => {
                    return <ProductCard key={product.id} product={product} />
                })
                }
            </div>
        </div>
    )
}