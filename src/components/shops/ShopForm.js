import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CategoryContext } from "../categories/CategoryProvider";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Typography } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { ShopContext } from "../shops/ShopProvider"
import { AddShoppingCart } from "@material-ui/icons";


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

export const ShopForm = () => {
    const { getCategories, categories } = useContext(CategoryContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { addShop } = useContext(ShopContext)

    const classes = useStyles();

    const onSubmit = (data) => {
        data.logo_path = ""
        addShop(data)
        
        alert(JSON.stringify(data));
    };

    useEffect(() => {
        getCategories()
    }, [])

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <div className="form">
            <Typography className="categories-header" variant="h3">Add Your Shop</Typography>
            <form className="new-shop-form" onSubmit={handleSubmit(onSubmit)}>
                <FormControl className={classes.formControl}>
                    <TextField id="outlined-basic" label="Shop Name" variant="outlined" {...register("name")} />
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="category-label" >Select Category</InputLabel>
                    <Select
                        labelId="category-label"
                        id="demo-simple-select-outlined"
                        {...register("category")}
                        label="Category"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {categories?.map(category => <MenuItem value={category.id}>{category.label}</MenuItem>)}
                    </Select>
                </FormControl>

                {errors.exampleRequired && <span>This field is required</span>}
                <Button id="form-button" variant="contained" color="primary" type="submit">Submit</Button>
            </form>
        </div>
    )
}