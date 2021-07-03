import React, { useContext, useEffect, useState } from "react"
import { useParams, Link, useHistory } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { ShopContext } from "./ShopProvider"
import { ProductCard } from "../products/ProductCard"
import Typography from '@material-ui/core/Typography';
import "../products/Product.css"
import "./Shop.css"

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    }
});

export const ShopDetail = () => {
    const { getShopById } = useContext(ShopContext)
    const [shops, setShops] = useState([])
    const { shopId } = useParams()
    const history = useHistory()
    const classes = useStyles();

    useEffect(() => {
        getShopById(shopId)
            .then(setShops)
    }, [])

    let products = []

    if (shops.products?.length) {
        products = shops.products
    }

    const handleAdd = () => history.push(`/shops/${shopId}/product/new`)


    return (
        <div className="shop__products">
            <Typography className="shop-header" variant="h3">{shops.name}</Typography>
            <Button size="large" variant="contained" color="primary" id="add-product-button" onClick={handleAdd}>
                Add Product
                </Button>
            <div className="product_cards">

                {products.map(product => {
                    return <ProductCard key={product.id} product={product} shopName={shops.name} />
                })}

            </div>

        </div>
    )
}