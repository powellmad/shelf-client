import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { CardContent, Typography } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import { OrderContext } from "../orders/OrderProvider"

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },

    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));



export const OrderForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { placeOrder } = useContext(OrderContext)
    const history = useHistory()
    const classes = useStyles();
    const { getOrders } = useContext(OrderContext)
    const [order, setOrder] = useState([])

    useEffect(() => {
        getOrders()
            .then((res) => {
                const order = res.find(order => order.is_open === true)
                setOrder(order)
            })
    }, [])

    const onSubmit = (data) => {
        // submitOrder(data)
    }

    const handleClick = (order) => {
        if (order) {
            placeOrder(order.id)
            alert("Success! Your Order has been placed!")
            history.push("/")
        } else {
            window.alert("The order is empty")
        }
    };

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

    return (<div className="order-form">
        <Card >
            <div className="form">
                <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                    <Typography className="shipping-header" variant="h3">Shipping Information</Typography>
                    <FormControl className={classes.formControl}>
                        <TextField id="outlined-basic" label="Address" variant="outlined" {...register("address",
                            { required: true })} />
                        {errors.address?.type === 'required' && "Address is required"}
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <TextField id="outlined-basic" label="City" variant="outlined" {...register("city",
                            { required: true })} />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <TextField id="outlined-basic" label="State" variant="outlined" {...register("state",
                            { required: true })} />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <TextField id="outlined-basic" label="Zipcode" variant="outlined" {...register("zipcode",
                            { required: true })} />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <TextField id="outlined-basic" label="Phone Number" variant="outlined" {...register("phone",
                            { required: true })} />
                    </FormControl>
                    {errors.exampleRequired && <span>This field is required</span>}
                </form>
                <form className="payment-form">
                    <Typography className="payment-header" variant="h3">Payment Information</Typography>
                    <FormControl className={classes.formControl}>
                        <TextField id="outlined-basic" label="Card Numer" variant="outlined" {...register("account_number")} />
                    </FormControl>
                    <div className="card-details">
                        <FormControl className={classes.formControl}>
                            <TextField id="outlined-basic" label="Merchant" variant="outlined" {...register("merchant_name")} />
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <TextField id="outlined-basic" label="Expiration Date" variant="outlined" {...register("expiration_date")} />
                        </FormControl>
                    </div>
                    {errors.exampleRequired && <span>This field is required</span>}
                </form>
            </div>
        </Card>
        <Card className="price">
            <CardContent>
                <Typography variant="h4" component="h2">
                    Order Summary
            </Typography>
                <p>Subtotal: ${subtotal()}</p>
                <p>Tax: ${tax()}</p>
                <p>Total: ${total()}</p>
                <Button className="checkout-button" variant="contained" color="primary" size="small"
                    onClick={() => handleClick(order)}>
                    Place Order
                </Button>
            </CardContent>
        </Card>
    </div>
    )
}