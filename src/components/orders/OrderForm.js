import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { CardContent, Typography } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import { ShopContext } from "../shops/ShopProvider"

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
    // const { submitOrder } = useContext(ShopContext)

    const classes = useStyles();

    const onSubmit = (data) => {
        // submitOrder(data)

        alert(JSON.stringify(data));
    };

    return (<div className="order-form">
        <Card >
            <div className="form">
                <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                    <Typography className="shipping-header" variant="h3">Shipping Information</Typography>
                    <FormControl className={classes.formControl}>
                        <TextField id="outlined-basic" label="Address" variant="outlined" {...register("address")} />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <TextField id="outlined-basic" label="City" variant="outlined" {...register("city")} />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <TextField id="outlined-basic" label="State" variant="outlined" {...register("state")} />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <TextField id="outlined-basic" label="Zipcode" variant="outlined" {...register("zipcode")} />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <TextField id="outlined-basic" label="Phone Number" variant="outlined" {...register("phone")} />
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
                <p>Subtotal:</p>
                <p>Tax:</p>
                <p>Total:</p>
                <Button className="checkout-button" variant="contained" color="primary" size="small">
                    Place Order
                </Button>
            </CardContent>
        </Card>
    </div>
    )
}