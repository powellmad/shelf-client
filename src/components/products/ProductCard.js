import React, { useContext, useState } from 'react';
import { OrderContext } from "../orders/OrderProvider"
// Material UI Imports
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import { indigo } from '@material-ui/core/colors';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// Material UI Styling 
const useStyles = makeStyles(() => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    avatar: {
        backgroundColor: indigo[500],
    },
}));

// Menu Styling
const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);




export const ProductCard = ({ product, shopName }) => {
    const classes = useStyles();
    const { addToOrder } = useContext(OrderContext)
    const [anchorEl, setAnchorEl] = useState(null);

    const handleAdd = (product) => {
        addToOrder(product.id)
        alert(product.name + " has been added to your cart")
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (<>
        <div>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <StyledMenuItem>
                    <ListItemIcon>

                    </ListItemIcon>
                    <ListItemText primary="Edit" />
                </StyledMenuItem>
                <StyledMenuItem>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary="Delete" />
                </StyledMenuItem>
            </StyledMenu>
        </div>

        <Card className={classes.root}>
            {product.is_current_user ?
                <CardHeader
                    avatar={
                        <Avatar aria-label="shop" className={classes.avatar}>
                            <AccountCircleIcon />
                        </Avatar>
                    }
                    action={
                        <IconButton onClick={handleClick} aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={shopName}
                />
                :
                <CardHeader
                    avatar={
                        <Avatar aria-label="shop" className={classes.avatar}>
                            <AccountCircleIcon />
                        </Avatar>
                    }
                    title={shopName}
                />
            }
            <CardMedia
                className={classes.media}
                title="{product.name}"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {product.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Quantity: {product.quantity}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {product.description}
                </Typography>
            </CardContent>
            <CardContent >
                <Typography>
                    ${product.price}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton onClick={() => handleAdd(product)} aria-label="add to cart">
                    <AddShoppingCartIcon />
                </IconButton>
            </CardActions>
        </Card>
    </>
    );
}