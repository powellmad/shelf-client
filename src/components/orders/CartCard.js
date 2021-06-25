import React, { useContext, useState } from 'react';
import { OrderContext } from "../orders/OrderProvider"
// Material UI Imports
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
        minWidth: 375,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export const CartCard = ({ order, product, shopName }) => {
    const classes = useStyles();

    const {removeFromOrder} = useContext(OrderContext)

    const handleRemove = ( product) => {
        removeFromOrder(order, product.id)
    }

    return (
        <Card className={classes.root} id="cart-card">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                   {shopName}
                </Typography>
                <Typography variant="h5" component="h2">
                    {product.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Quantity: {product.quantity}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {product.description}
                </Typography>
                <Typography>
                    ${product.price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => handleRemove(product)} aria-label="remove from cart" size="small">Remove</Button>
            </CardActions>
        </Card>
    )
}

