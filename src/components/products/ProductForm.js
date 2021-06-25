import React, { useContext, useEffect, useState } from "react";
import {useParams, useHistory} from "react-router-dom"
import { useForm } from "react-hook-form";
import { ProductContext } from "./ProductProvider";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Typography, Card } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';

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

export const ProductForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { addProduct } = useContext(ProductContext)
    const { shopId } = useParams()
    const history = useHistory()
    const classes = useStyles();

    const onSubmit = (data) => {
        data.image_path = ""
        data.subcategory_id = null
        data.shop_id = shopId
        addProduct(data)
        
        alert(JSON.stringify(data.name + " has been added"))
        history.push(`/shops/${shopId}`)
    };

    return (
        <Card className="product-form">
            <Typography className="categories-header" variant="h3">Add Product</Typography>
            <form className="new-product-form" onSubmit={handleSubmit(onSubmit)}>
                <FormControl className={classes.formControl}>
                    <TextField id="outlined-basic" label="Name" variant="outlined" {...register("name")} />
                </FormControl>
                <FormControl className={classes.formControl}>
                    <TextField id="outlined-basic" label="Quantity" variant="outlined" {...register("quantity")} />
                </FormControl>
                <FormControl className={classes.formControl}>
                    <TextField id="outlined-basic" label="Description" variant="outlined" {...register("description")} />
                </FormControl>
                <FormControl className={classes.formControl}>
                    <TextField id="outlined-basic" label="Price" variant="outlined" {...register("price")} />
                </FormControl>

                {errors.exampleRequired && <span>This field is required</span>}
                <Button id="form-button" variant="contained" color="primary" type="submit">Add</Button>
            </form>
        </Card>
    )
}