import React, { useContext, useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { CategoryContext } from "./CategoryProvider"
import { ProductCard } from "../products/ProductCard"
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import "../products/Product.css"

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export const CategoryDetail = () => {
    const { getCategoryById } = useContext(CategoryContext)
    const [categories, setCategories] = useState({})
    const { categoryId } = useParams()

    const classes = useStyles();

    useEffect(() => {
        getCategoryById(categoryId)
            .then((response) => {
                setCategories(response)
            })
    }, [])

    let shops = []

    if (categories.shop_set?.length) {
        shops = categories.shop_set
    }

    return (
        <section className="category__products">
            <Typography className="categories-header" variant="h3">{categories.label}</Typography>
            <div className="products-flex product_cards">
                {shops.map(shop => {
                    return <>
                        <div>
                            {shop.products?.map(product => <ProductCard key={product.id} product={product} shopName={shop.name} />
                            )}</div>
                    </>
                })}
            </div>
        </section>
    )

}
