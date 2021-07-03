import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import Button from '@material-ui/core/Button'
import { CartCard } from "../orders/CartCard"
import { OrderContext } from "./OrderProvider"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import "../products/Product.css"
import "./Order.css"

export const OrderCart = () => {
    const { getOrders } = useContext(OrderContext)
    const [order, setOrder] = useState([])
    const history = useHistory()

    let cart = {}

    useEffect(() => {
        getOrders()
            .then((orders) => {
                cart = orders.find(order => order.is_open === true)
                console.log(orders)
                setOrder(cart)
            })

    }, [])

    const subtotal = () => {
        let amount = 0
        order?.products?.map(product => amount += product?.price)
        return (amount.toFixed(2))
    }

    const tax = () => {
        return (subtotal() / 9.75).toFixed(2)
    }

    const total = () => {
        let salesTax = parseFloat(subtotal()) + parseFloat(tax())
        return (salesTax.toFixed(2))
    }

    return (
        <div className="cart-order">
            {order ?
                <div className="cart_cards">
                    <Typography className="cart-header" variant="h3">Shopping Cart</Typography>
                    {order.products?.map(product => {
                        return <CartCard key={product.id} order={order.id} product={product} />
                    })
                    }
                </div>
                :
                <div className="cart_cards">
                    <Typography className="cart-header" variant="h3">Shopping Cart</Typography>
                    <Typography className="cart-header" variant="h5">Your Shopping Cart is Empty!</Typography>
                </div>
            }
            <Card className="price">
                <CardContent>
                    <Typography variant="h4" component="h2">
                        Order Summary
                    </Typography>
                    <p>Subtotal: ${subtotal()}</p>
                    <p>Tax: ${tax()}</p>
                    <p>Total: ${total()}</p>
                    <Button className="checkout-button" variant="contained" color="primary" size="small" onClick={() => {order ? history.push("/cart/checkout") : window.alert("The order is empty")}}>
                        Checkout
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
} 