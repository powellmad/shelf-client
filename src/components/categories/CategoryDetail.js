import React, { useContext, useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { CategoryContext } from "./CategoryProvider"
import { ProductCard } from "../products/ProductCard"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
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
            <div className="products-flex">
                {shops.map(shop => {
                    return <>
                        <div className="product_cards">
                            {shop.products?.map(product => <ProductCard key={product.id} product={product} shopName={shop.name} />
                            )}</div>
                    </>
                })}
            </div>
        </section>
    )

}

export default function MediaCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Lizard
          </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
          </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
        </Button>
                <Button size="small" color="primary">
                    Learn More
        </Button>
            </CardActions>
        </Card>
    );
}
