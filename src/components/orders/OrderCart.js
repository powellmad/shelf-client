import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import Button from '@material-ui/core/Button'
import { CartCard } from "../orders/CartCard"
import { OrderContext } from "./OrderProvider"
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import "../products/Product.css"
import "./Order.css"

export const OrderCart = () => {
    const { orders, getOrders } = useContext(OrderContext)
    const [cart, setOrder] = useState([])
    const history = useHistory()

    useEffect(() => {
        getOrders()
            .then((res) => {
                const cart = res.find(order => order.is_open === true)
                console.log("cart", cart)
                setOrder(cart)
            })
    }, [])

    return (
        <div className="cart-order">
            <div className="cart_cards">
                <Typography className="cart-header" variant="h3">Shopping Cart</Typography>
                {cart.products?.map(product => {
                    return <CartCard key={product.id} product={product} />
                })
                }
            </div>
            <Card className="price">
                <CardContent>
                    <Typography variant="h4" component="h2">
                        Order Summary
            </Typography>
                    <p>Subtotal:</p>
                    <p>Tax:</p>
                    <p>Total:</p>
                    <Button className="checkout-button" variant="contained" color="primary" size="small" onClick={() => history.push("/cart/checkout")}>
                        Checkout
                </Button>
                </CardContent>
            </Card>
        </div>
    )
}